import { actionType } from './actionCreator';

const initialState = {
  transactionList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_SINGLE_TRANS:
      return {
        ...state,
        transactionList: [...state.transactionList, { ...action.data }],
      };
    case actionType.LOAD_LIST_TRANS:
      return {
        ...state,
        transactionList: [...action.data],
      };
    default:
      return state;
  }
};
