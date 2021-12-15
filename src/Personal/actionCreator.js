import { BACKEND_URL } from 'react-native-dotenv';

export const actionType = {
  SIGNUP_START: 'SIGNUP_START',
  SIGNUP_FAILED: 'SIGNUP_FAILED',
  SIGNUP_SUCCESSFUL: 'SIGNUP_SUCCESSFUL',
  LOGOUT: 'LOGOUT',
  LOGIN_START: 'LOGIN_START',
  LOGIN_FAILED: 'LOGIN_FAILED',
  LOGIN_SUCCESSFUL: 'LOGIN_SUCCESSFUL',
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
    if (response.accessToken !== '' && response.accessToken !== undefined) {
      dispatch(loginSuccessful({
        email: userInfo.email,
        accessToken: response.accessToken,
      }));
    } else {
      dispatch(loginFailed({ message: response.message }));
    }
  }).catch((error) => {
    dispatch(loginFailed({ message: error }));
  });
};

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
