import { actionType } from './actionCreator';

const initialState = {
  email: '',
  accessToken: '',
  message: '',
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case actionType.LOGIN_START:
      return {
        email: '',
        accessToken: '',
        message: '',
      };
    case actionType.LOGIN_FAILED:
      return {
        ...state,
        accessToken: '',
        message: action.payload.message,
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
