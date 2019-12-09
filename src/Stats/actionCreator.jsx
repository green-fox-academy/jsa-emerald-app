export const actionType = {
  ADD_TRANS: 'ADD_TRANS',
  SET_NEW_TRANS_INSERTION_SUCCESS: 'SET_NEW_TRANS_INSERTION_SUCCESS',
};

export function addNewTransaction(type, date, amount) {
  return {
    type: actionType.ADD_TRANS,
    data: {
      type, date, amount,
    },
  };
}

export function setNewTransactionInsertionSuccess(bool) {
  return {
    type: actionType.SET_NEW_TRANS_INSERTION_SUCCESS,
    data: bool,
  };
}
