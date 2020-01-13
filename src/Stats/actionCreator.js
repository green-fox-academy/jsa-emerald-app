export const actionType = {
  ADD_TRANS: 'ADD_TRANS',
  RESTORE_TRANS: 'RESTORE_TRANS',
};

export function addNewTransaction(type, date, amount, labelName) {
  return {
    type: actionType.ADD_TRANS,
    data: {
      type,
      date,
      amount,
      labelName,
    },
  };
}

export function restoreTransactions(dataSet) {
  return {
    type: actionType.RESTORE_TRANS,
    dataSet,
  };
}
