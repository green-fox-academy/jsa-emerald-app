import { BACKEND_URL } from 'react-native-dotenv';
import { restoreTransactions } from '../Stats/actionCreator';

const moment = require('moment');

const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1pa2UiLCJlbWFpbCI6Im1pa2VAZ21haWwuY29tIiwiaWQiOiI1ZTEwYmMyNDcwMWZiZDQ4OTczNzdkOWYiLCJpYXQiOjE1NzgzNjQxOTQsImV4cCI6MTU4MDk1NjE5NH0.KiAzpui0f9-uwrAGVghNwukkEPWgeHHGkZH4sEm_v6o';
// const accessToken = '';

export const actionType = {
  BACKUP_START: 'BACKUP_START',
  BACKUP_SUCCESSFUL: 'BACKUP_SUCCESSFUL',
  BACKUP_FAILED: 'BACKUP_FAILED',
  SIGNUP_START: 'SIGNUP_START',
  SIGNUP_SUCCESSFUL: 'SIGNUP_SUCCESSFUL',
  SIGNUP_FAILED: 'SIGNUP_FAILED',
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
    type: actionType.signupSuccessful,
    payload: userInfo,
  };
}

export function signupFailed() {
  return {
    type: actionType.signupFailed,
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

export const requestBackup = (transactions) => (dispatch) => {
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

export const requestRestore = () => (dispatch) => {
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
