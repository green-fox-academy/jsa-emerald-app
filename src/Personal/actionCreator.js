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

export function loginSuccessful(userInfo) {
  return {
    type: actionType.LOGIN_SUCCESSFUL,
    payload: userInfo,
  };
}

export function loginFailed(userInfo) {
  return {
    type: actionType.LOGIN_FAILED,
    payload: userInfo,
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
    if (response.accessToken !== '' && response.accessToken !== undefined) {
      dispatch(loginSuccessful({
        email: userInfo.email,
        accessToken: response.accessToken,
      }));
    } else {
      dispatch(loginFailed({ status: response.code, message: response.message }));
    }
  }).catch(() => {
    dispatch(loginFailed());
  });
};
