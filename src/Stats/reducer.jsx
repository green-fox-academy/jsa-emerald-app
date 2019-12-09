import { actionType } from './actionCreator';

const initialState = {
  transactions: [],
  newTransInsertionSuccess: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_TRANS:
      return {
        ...state,
        newTransInsertionSuccess: true,
        transactions: [...state.transactions, { ...action.data }],
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
