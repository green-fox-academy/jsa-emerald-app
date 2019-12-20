import { BACKEND_URL } from 'react-native-dotenv';

export const actionType = {
  BACKUP_START: 'BACKUP_START',
  BACKUP_DATA: 'BACKUP_DATA',
  BACKUP_FAILED: 'BACKUP_FAILED',
  BACKUP_INITIAL: 'BACKUP_INITIAL',
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
