import { BACKEND_URL } from 'react-native-dotenv';

const moment = require('moment');

export const actionType = {
  BACKUP_START: 'BACKUP_START',
  BACKUP_SUCCESSFUL: 'BACKUP_SUCCESSFUL',
  BACKUP_FAILED: 'BACKUP_FAILED',
  SIGNUP_START: 'SIGNUP_START',
  SIGNUP_SUCCESSFUL: 'SIGNUP_SUCCESSFUL',
  SIGNUP_FAILED: 'SIGNUP_FAILED',
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

export function backupFailed() {
  return {
    type: actionType.BACKUP_FAILED,
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

export const requestBackup = (transactions) => (dispatch) => {
  dispatch(backupStart());
  fetch(`${BACKEND_URL}/backup`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(transactions),
  }).then((response) => {
    if (response.status === 200) {
      setTimeout(() => dispatch(dispatch(backupSuccessful(moment().unix()))), 1000);
    } else {
      setTimeout(() => dispatch(backupFailed()), 1000);
    }
  })
    .catch((error) => {
      setTimeout(() => dispatch(backupFailed()), 1000);
      throw error;
    });
};
