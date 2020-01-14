import { actionType } from './actionCreator';

const initialState = {
  transactions: [],
  error: '',
  isInProgress: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_FAMILY_TRANS_START:
      return {
        ...state,
        isInProgress: true,
      };
    case actionType.GET_FAMILY_TRANS:
      return {
        ...state,
        transactions: action.dataSet,
        isInProgress: false,
        error: '',
      };
    case actionType.GET_FAMILY_TRANS_FAILED:
      return {
        ...state,
        error: action.error,
        isInProgress: false,
      };
    default:
      return state;
  }
};
