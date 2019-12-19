export const actionType = {
  BACKUP_REQUEST: 'BACKUP_REQUEST',
};

export function backupRequest(transactionData) {
  return {
    type: actionType.BACKUP_REQUEST,
    data: transactionData,
  };
}

export const backupData = (transactions) => function (dispatch) {
  console.log(transactions);

  // dispatch(backupRequest(transactions));
};
