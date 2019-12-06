import {} from 'react-navigation-stack';

import moment from 'moment';

const initialSate = {
  transactions: [],
  newTransType: 'Expense',
  newTransDate: moment().format('DD/MM/YYYY'),
  newTransAmount: null,
  newTransInsertionSuccess: false,
};

export const actionType = {
  ADD_TRANS: 'ADD_TRANS',
  SET_NEW_TRANS_TYPE: 'SET_NEW_TRANS_TYPE',
  SET_NEW_TRANS_DATE: 'SET_NEW_TRANS_DATE',
  SET_NEW_TRANS_AMOUNT: 'SET_NEW_TRANS_AMOUNT',
  SET_NEW_TRANS_INSERTION_SUCCESS: 'SET_NEW_TRANS_INSERTION_SUCCESS',
};

export default (state = initialSate, action) => {
  switch (action.type) {
    case actionType.ADD_TRANS:
      return {
        ...state,
        newTransInsertionSuccess: true,
        newTransType: initialSate.newTransType,
        newTransAmount: initialSate.newTransAmount,
        newTransDate: initialSate.newTransDate,
        transactions: [...state.transactions, { ...action.data }],
      };
    case actionType.SET_NEW_TRANS_TYPE:
      return {
        ...state,
        newTransType: action.data,
      };
    case actionType.SET_NEW_TRANS_AMOUNT:
      return {
        ...state,
        newTransAmount: action.data,
      };
    case actionType.SET_NEW_TRANS_DATE:
      return {
        ...state,
        newTransDate: action.data,
      };
    case actionType.SET_NEW_TRANS_INSERTION_SUCCESS:
      return {
        ...state,
        newTransInsertionSuccess: action.data,
      };
    default:
      return state;
  }
};
