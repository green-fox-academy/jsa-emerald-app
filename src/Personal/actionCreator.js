import { BACKEND_URL } from 'react-native-dotenv';

export const actionType = {
  LOGIN_START: 'LOGIN_START',
  LOGIN_FAILED: 'LOGIN_FAILED',
  LOGIN_SUCCESSFUL: 'LOGIN_SUCCESSFUL',
};

export function loginStart() {
  return {
    type: actionType.LOGIN_START,
  };
}

export function loginSuccessful(payload) {
  return {
    type: actionType.LOGIN_SUCCESSFUL,
    payload,
  };
}

export function loginFailed(payload) {
  return {
    type: actionType.LOGIN_FAILED,
    payload,
  };
}

export const requestLogin = (userInfo) => (dispatch) => {
  dispatch(loginStart());
  fetch(`${BACKEND_URL}/sessions`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'Application/json',
    },
    body: JSON.stringify(userInfo),
  }).then((response) => response.json()).then((response) => {
    console.log(response);

    if (response.accessToken !== '' && response.accessToken !== undefined) {
      dispatch(loginSuccessful({
        email: userInfo.email,
        accessToken: response.accessToken,
      }));
      console.log(2);
    } else {
      dispatch(loginFailed({ message: response.message }));
      console.log(1);
      console.log(response.message);
    }
  }).catch((error) => {
    dispatch(loginFailed({ message: error }));
  });
};
