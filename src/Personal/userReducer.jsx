import { actionType } from './actionCreator';

const initialUser = {
  email: '',
  accessToken: '',
  status: '',
};

const user = (state = initialUser, action) => {
  switch (action.type) {
    case actionType.LOGIN_START:
      return {
        ...state,
        email: '',
        accessToken: '',
        status: '',
      };
    case actionType.LOGIN_FAILED:
      return {
        ...state,
        accessToken: '',
        status: action.payload.status,
      };
    case actionType.LOGIN_SUCCESSFUL:
      return {
        ...state,
        email: action.payload.email,
        accessToken: action.payload.accessToken,
        status: '',
      };
    default:
      return state;
  }
};

export default user;
