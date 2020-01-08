import { actionType } from './actionCreator';

const initialUser = {
  username: '',
  email: '',
  accessToken: '',
  status: '',
};

const user = (state = initialUser, action) => {
  switch (action.type) {
    case actionType.SIGNUP_START:
      return {
        ...state,
        username: '',
        email: '',
        accessToken: '',
        status: '',
      };
    case actionType.SIGNUP_SUCCESSFUL:
      return {
        ...state,
        username: action.payload.username,
        email: action.payload.email,
        accessToken: action.payload.accessToken,
        status: '',
      };
    case actionType.SIGNUP_FAILED:
      return {
        ...state,
        accessToken: '',
        status: action.payload.status,
      };
    case actionType.LOGOUT_SUCCESSFUL:
      return {
        ...state,
        accessToken: '',
      };
    default:
      return state;
  }
};

export default user;
