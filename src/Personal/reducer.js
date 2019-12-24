import { actionType } from './actionCreator';

const initialUser = {
  username: '',
  email: '',
  accessToken: null,
};

const user = (state = initialUser, action) => {
  switch (action.type) {
    case actionType.SIGNUP_START:
      return {
        ...state,
        username: '',
        email: '',
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

export default { user };
