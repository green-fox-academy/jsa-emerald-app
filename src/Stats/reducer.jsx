import { actionType } from './actionCreator';

const initialState = {
  transactionList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_TRANS:
      return {
        ...state,
        transactionList: [...state.transactionList, { ...action.data }],
      };
    default:
      return state;
  }
};
