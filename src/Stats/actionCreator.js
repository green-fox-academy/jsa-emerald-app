export const actionType = {
  ADD_TRANS: 'ADD_TRANS',
  RESTORE_TRANS: 'RESTORE_TRANS',
};

export function addNewTransaction(type, date, amount, label) {
  return {
    type: actionType.ADD_TRANS,
    data: {
      type, date, amount, label,
    },
  };
}

export function restoreTransactions(dataSet) {
  return {
    type: actionType.RESTORE_TRANS,
    dataSet,
  };
}
