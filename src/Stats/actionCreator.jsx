export const actionType = {
  ADD_SINGLE_TRANS: 'ADD_SINGLE_TRANS',
  LOAD_LIST_TRANS: 'LOAD_LIST_TRANS',
};

export function addSingleTransaction(type, date, amount) {
  return {
    type: actionType.ADD_SINGLE_TRANS,
    data: {
      type, date, amount,
    },
  };
}

export function loadTransaction(bulkTrans) {
  return {
    type: actionType.LOAD_LIST_TRANS,
    data: bulkTrans,
  };
}
