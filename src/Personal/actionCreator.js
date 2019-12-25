export const actionType = {
  SIGNUP_START: 'SIGNUP_START',
  SIGNUP_FAILED: 'SIGNUP_FAILED',
  SIGNUP_SUCCESSFUL: 'SIGNUP_SUCCESSFUL',
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

export function signupFailed() {
  return {
    type: actionType.SIGNUP_FAILED,
  };
}

export const requestSignup = (email, password, username) => (dispatch) => {
  dispatch(signupStart());
  fetch('http://10.72.161.25:3000/users/signup', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'Application/json',
    },
    body: JSON.stringify({ email, password, username }),
  }).then((response) => {
    if (response.status === 200) {
      return response.json();
    }
    dispatch(signupFailed());
    return false;
  }).then((response) => {
    if (response) {
      dispatch(signupSuccessful(response, email, password));
    }
  })
    .catch((error) => {
      throw error;
    });
};
