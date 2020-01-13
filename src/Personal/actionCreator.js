import { BACKEND_URL } from 'react-native-dotenv';
import { restoreTransactions } from '../Stats/actionCreator';

const moment = require('moment');

export const actionType = {
  BACKUP_START: 'BACKUP_START',
  BACKUP_SUCCESSFUL: 'BACKUP_SUCCESSFUL',
  BACKUP_FAILED: 'BACKUP_FAILED',
  SIGNUP_START: 'SIGNUP_START',
  SIGNUP_FAILED: 'SIGNUP_FAILED',
  SIGNUP_SUCCESSFUL: 'SIGNUP_SUCCESSFUL',
  LOGOUT_SUCCESSFUL: 'LOGOUT_SUCCESSFUL',
  LOGIN_START: 'LOGIN_START',
  LOGIN_FAILED: 'LOGIN_FAILED',
  LOGIN_SUCCESSFUL: 'LOGIN_SUCCESSFUL',
  RESTORE_START: 'RESTORE_START',
  RESTORE_SUCCESSFUL: 'RESTORE_SUCCESSFUL',
  RESTORE_FAILED: 'RESTORE_FAILED',
};

export function backupStart() {
  return {
    type: actionType.BACKUP_START,
  };
}

export function backupSuccessful(timestamp) {
  return {
    type: actionType.BACKUP_SUCCESSFUL,
    payload: timestamp,
  };
}

export function backupFailed(errorMsg) {
  return {
    type: actionType.BACKUP_FAILED,
    payload: errorMsg,
  };
}

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

export function restoreStart() {
  return {
    type: actionType.RESTORE_START,
  };
}

export function restoreSuccessful(payload) {
  return {
    type: actionType.RESTORE_SUCCESSFUL,
    payload,
  };
}

export function restoreFailed(payload) {
  return {
    type: actionType.RESTORE_FAILED,
    payload,
  };
}

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

export const requestBackup = () => (dispatch, getState) => {
  const { transactions } = getState().transactions;
  const { accessToken } = getState().user;

  if (!accessToken) {
    dispatch(backupFailed('Unauthorized token'));
    return;
  }
  dispatch(backupStart());
  fetch(`${BACKEND_URL}/backup`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ transactions }),
  }).then((response) => {
    if (response.status === 200) {
      setTimeout(() => dispatch(backupSuccessful(moment().unix())), 300);
      throw new Error(200);
    } else {
      return response.json();
    }
  }).then((response) => {
    setTimeout(() => dispatch(backupFailed(response.message)), 300);
  }).catch((error) => {
    if (error.message !== '200') {
      dispatch(backupFailed('Network error, Please try again later'));
    }
  });
};

export const requestRestore = () => (dispatch, getState) => {
  const { accessToken } = getState().user;
  if (!accessToken) {
    dispatch(restoreFailed('Unauthorized token'));
    return;
  }
  dispatch(restoreStart());

  fetch(`${BACKEND_URL}/backup`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  }).then((response) => {
    if (response.status === 401) {
      dispatch(restoreFailed(response.message));
      throw new Error(response.status);
    } else {
      return response.json();
    }
  }).then((response) => {
    if (response.code) {
      dispatch(restoreFailed(response.message));
    } else {
      dispatch(restoreTransactions(response));
      setTimeout(() => dispatch(restoreSuccessful(moment().unix())), 300);
    }
  }).catch((error) => {
    if (error !== '401') {
      dispatch(restoreFailed('Network error, Please try again later'));
    }
  });
};

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
        signupFailed({ status: response.code, message: response.message }),
      );
    }
  })
    .catch(() => {
      dispatch(signupFailed());
    });
};

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
        username: 'Katy',
      }));
    } else {
      dispatch(loginFailed({ status: response.code, message: response.message }));
    }
  }).catch((err) => {
    dispatch(loginFailed({ status: null, message: err.message }));
  });
};
