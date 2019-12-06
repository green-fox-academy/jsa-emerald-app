import moment from 'moment';
import { actionType } from './actionCreator';

const initialState = {
  transactions: [],
  newTransType: 'Expense',
  newTransDate: moment().format('DD/MM/YYYY'),
  newTransAmount: null,
  newTransInsertionSuccess: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_TRANS:
      return {
        ...state,
        newTransInsertionSuccess: true,
        newTransType: initialState.newTransType,
        newTransAmount: initialState.newTransAmount,
        newTransDate: initialState.newTransDate,
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
