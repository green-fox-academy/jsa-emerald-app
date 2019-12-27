import { actionType } from './actionCreator';

const initialUser = {
  email: '',
  accessToken: '',
};

const user = (state = initialUser, action) => {
  switch (action.type) {
    case actionType.LOGIN_START:
      return {
        ...state,
        email: '',
        accessToken: '',
      };
    case actionType.LOGIN_FAILED:
      return {
        ...state,
        accessToken: '',
      };
    case actionType.LOGIN_SUCCESSFUL:
      return {
        ...state,
        email: action.payload.email,
        accessToken: action.payload.accessToken,
      };
    default:
      return state;
  }
};

export default user;
