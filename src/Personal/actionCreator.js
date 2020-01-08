import { BACKEND_URL } from 'react-native-dotenv';

export const actionType = {
  SIGNUP_START: 'SIGNUP_START',
  SIGNUP_FAILED: 'SIGNUP_FAILED',
  SIGNUP_SUCCESSFUL: 'SIGNUP_SUCCESSFUL',
  LOGOUT_SUCCESSFUL: 'LOGOUT_SUCCESSFUL',
};

export function signupStart() {
  return {
    type: actionType.SIGNUP_START,
  };
}

export function signupSuccessful(userInfo) {
  return {
    type: actionType.SIGNUP_SUCCESSFUL,
    payload: userInfo,
  };
}

export function signupFailed(userInfo) {
  return {
    type: actionType.SIGNUP_FAILED,
    payload: userInfo,
  };
}

export function logoutSuccessful() {
  return {
    type: actionType.LOGOUT_SUCCESSFUL,
  };
}

export const requestSignup = (userInfo) => (dispatch) => {
  dispatch(signupStart());
  fetch(`${BACKEND_URL}/users/signup`, {
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
    dispatch(signupFailed({ status: response.status }));
    return response.json();
  }).then((response) => {
    if (response) {
      dispatch(
        signupSuccessful({
          accessToken: response.accessToken,
          email: userInfo.email,
          password: userInfo.password,
          username: userInfo.username,
        }),
      );
    }
  })
    .catch((error) => {
      dispatch(signupFailed());
      throw error;
    });
};
