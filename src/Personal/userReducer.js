import { actionType } from './actionCreator';

const initialState = {
  email: '',
  accessToken: '',
  message: '',
  isInProgress: '',
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case actionType.LOGIN_START:
      return {
        email: '',
        accessToken: '',
        message: '',
        isInProgress: true,
      };
    case actionType.LOGIN_FAILED:
      return {
        ...state,
        accessToken: '',
        message: action.payload.message,
        isInProgress: false,
      };
    case actionType.LOGIN_SUCCESSFUL:
      return {
        ...state,
        email: action.payload.email,
        accessToken: action.payload.accessToken,
        isInProgress: false,
      };
    default:
      return state;
  }
};

export default user;
