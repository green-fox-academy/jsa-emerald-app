import { actionType } from './actionCreator';

const initialUser = {
  username: '',
  email: '',
  accessToken: '0xa143981f3ec758296a1575146eab03ef047b7e40',
};

const user = (state = initialUser, action) => {
  switch (action.type) {
    case actionType.SIGNUP_START:
      return {
        ...state,
        accessToken: null,
      };
    case actionType.SIGNUP_SUCCESSFUL:
      return {
        ...state,
        username: action.payload.username,
        email: action.payload.email,
        accessToken: action.payload.accessToken,
      };
    case actionType.SIGNUP_FAILED:
      return {
        ...state,
        accessToken: null,
      };
    default:
      return state;
  }
};

export default user;
