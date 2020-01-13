import { actionType } from './actionCreator';

const initialMemberList = {
  members: [],
  error: '',
};

export default (state = initialMemberList, action) => {
  switch (action.type) {
    case actionType.CONFIRM_FAMILY_MEMBER:
      return {
        ...state,
        members: [...state.members, { ...action.payload }],
      };
    default:
      return state;
  }
};
