export const actionType = {
  BACKUP_DATA: 'BACKUP_DATA',
};

export function backupData(statusCode) {
  return {
    type: actionType.BACKUP_DATA,
    payload: statusCode,
  };
}

export const requestBackup = (transactions) => (dispatch) => {
  fetch('http://10.72.160.223:8080/backup', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(transactions),

  }).then((response) => {
    dispatch(backupData(response.status));
  })
    .catch((error) => {
      throw error;
    });
};
