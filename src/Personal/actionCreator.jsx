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

export function loginFailed() {
  return {
    type: actionType.LOGIN_FAILED,
  };
}

export const requestLogin = (userInfo) => (dispatch) => {
  dispatch(loginStart());
  fetch(`${BACKEND_URL}/users/login`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'Application/json',
    },
    body: JSON.stringify(userInfo),
  }).then((response) => {
    if (response.status === 200) {
      return response.json();
    }
    dispatch(loginFailed());
    return false;
  }).then((response) => {
    if (response) {
      dispatch(loginSuccessful({ email: userInfo.email, accessToken: response.accessToken }));
    }
  }).catch((error) => {
    dispatch(loginFailed());
    throw error;
  });
};
