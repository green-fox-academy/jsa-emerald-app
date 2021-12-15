import { actionType } from './actionCreator';

const initialState = {
  username: '',
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
    case actionType.SIGNUP_START:
      return {
        username: '',
        email: '',
        accessToken: '',
        message: '',
        isInProgress: true,
      };
    case actionType.SIGNUP_SUCCESSFUL:
      return {
        ...state,
        username: action.payload.username,
        email: action.payload.email,
        accessToken: action.payload.accessToken,
        isInProgress: false,
      };
    case actionType.SIGNUP_FAILED:
      return {
        ...state,
        accessToken: '',
        message: action.payload.message,
        isInProgress: false,
      };
    case actionType.LOGOUT:
      return {
        ...state,
        username: '',
        email: '',
        accessToken: '',
      };
    default:
      return state;
  }
};

export default user;
