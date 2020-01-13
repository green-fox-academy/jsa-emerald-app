import { actionType } from './actionCreator';

const initialState = {
  transactions: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_FAMILY_TRANS:
      return {
        ...state,
        transactions: action.dataSet,
      };
    default:
      return state;
  }
};
