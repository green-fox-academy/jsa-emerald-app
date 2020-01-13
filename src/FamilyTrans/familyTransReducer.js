import { actionType } from './actionCreator';

const initialState = {
  transactions: [],
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_FAMILY_TRANS:
      return {
        ...state,
        transactions: action.dataSet,
        error: '',
      };
    case actionType.GET_FAMILY_TRANS_FAILED:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
