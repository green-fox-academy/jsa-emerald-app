export const actionType = {
  ADD_TRANS: 'ADD_TRANS',
  SET_NEW_TRANS_TYPE: 'SET_NEW_TRANS_TYPE',
  SET_NEW_TRANS_DATE: 'SET_NEW_TRANS_DATE',
  SET_NEW_TRANS_AMOUNT: 'SET_NEW_TRANS_AMOUNT',
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

export function setNewTransactionType(type) {
  return {
    type: actionType.SET_NEW_TRANS_TYPE,
    data: type,
  };
}

export function setNewTransactionAmount(amount) {
  return {
    type: actionType.SET_NEW_TRANS_AMOUNT,
    data: amount,
  };
}

export function setNewTransactionDate(date) {
  return {
    type: actionType.SET_NEW_TRANS_DATE,
    data: date,
  };
}

export function setNewTransactionInsertionSuccess(bool) {
  return {
    type: actionType.SET_NEW_TRANS_INSERTION_SUCCESS,
    data: bool,
  };
}
