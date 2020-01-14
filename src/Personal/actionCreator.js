import { BACKEND_URL } from 'react-native-dotenv';

export const actionType = {
  SIGNUP_START: 'SIGNUP_START',
  SIGNUP_FAILED: 'SIGNUP_FAILED',
  SIGNUP_SUCCESSFUL: 'SIGNUP_SUCCESSFUL',
  LOGOUT: 'LOGOUT',
};

export function signupStart() {
  return {
    type: actionType.SIGNUP_START,
  };
}

export function signupSuccessful(payload) {
  return {
    type: actionType.SIGNUP_SUCCESSFUL,
    payload,
  };
}

export function signupFailed(payload) {
  return {
    type: actionType.SIGNUP_FAILED,
    payload,
  };
}

export function logout() {
  return {
    type: actionType.LOGOUT,
  };
}

export const requestSignup = (userInfo) => (dispatch) => {
  dispatch(signupStart());
  fetch(`${BACKEND_URL}/register`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'Application/json',
    },
    body: JSON.stringify(userInfo),
  }).then((response) => response.json()).then((response) => {
    if (response.accessToken !== '' && response.accessToken !== undefined) {
      dispatch(
        signupSuccessful({
          accessToken: response.accessToken,
          email: userInfo.email,
          password: userInfo.password,
          username: userInfo.username,
        }),
      );
    } else {
      dispatch(
        signupFailed({ message: response.message }),
      );
    }
  })
    .catch((error) => {
      dispatch(signupFailed({ message: error }));
    });
};
