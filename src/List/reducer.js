import { actionType } from './actionCreator';

const initialState = {
  transactions: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_TRANS:
      return {
        ...state,
        transactions: [...state.transactions, { ...action.data }],
      };
    default:
      return state;
  }
};
