import { BACKEND_URL } from 'react-native-dotenv';

export const actionType = {
  BACKUP_START: 'BACKUP_START',
  BACKUP_DATA: 'BACKUP_DATA',
  BACKUP_FAILED: 'BACKUP_FAILED',
  BACKUP_INITIAL: 'BACKUP_INITIAL',
  SIGNUP_START: 'SIGNUP_START',
  SIGNUP_SUCCESSFUL: 'SIGNUP_SUCCESSFUL',
  SIGNUP_FAILED: 'SIGNUP_FAILED',
};

export function backupStart() {
  return {
    type: actionType.BACKUP_START,
  };
}

export function backupData() {
  return {
    type: actionType.BACKUP_DATA,
  };
}

export function backupFailed() {
  return {
    type: actionType.BACKUP_FAILED,
  };
}

export function initialBackup() {
  return {
    type: actionType.BACKUP_INITIAL,
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
      dispatch(backupData());
      setTimeout(() => dispatch(initialBackup()), 2000);
    } else {
      dispatch(backupFailed());
      setTimeout(() => dispatch(initialBackup()), 2000);
    }
  })
    .catch((error) => {
      dispatch(backupFailed());
      setTimeout(() => dispatch(initialBackup()), 2000);
      throw error;
    });
};
