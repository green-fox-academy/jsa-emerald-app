import { actionType } from './actionCreator';

const initialSearchList = {
  members: [],
  error: '',
};

export default (state = initialSearchList, action) => {
  switch (action.type) {
    case actionType.GET_MEMBER_LIST:
      return {
        ...state,
        members: action.payload,
      };
    case actionType.SEARCH_FAILED:
      return {
        ...state,
        error: '',
        members: [],
      };
    case actionType.CONFIRM_FAMILY_MEMBER:
      return {
        ...state,
        members: [],
      };
    case actionType.CANCEL_MEMBER_SEARCH:
      return {
        ...state,
        members: [],
      };
    default:
      return state;
  }
};
