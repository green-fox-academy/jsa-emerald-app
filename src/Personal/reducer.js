import { actionType } from './actionCreator';

const initialBackup = {
  response: 'Click button to backup data',
};

const initialUser = {
  username: '',
  email: '',
  accessToken: '0xa143981f3ec758296a1575146eab03ef047b7e40',
};

const backupState = (state = initialBackup, action) => {
  switch (action.type) {
    case actionType.BACKUP_START:
      return {
        response: 'Backing up',
      };
    case actionType.BACKUP_DATA:
      return {
        response: 'Back up successfully!',
      };
    case actionType.BACKUP_FAILED:
      return {
        response: 'Ops, something went wrong',
      };
    case actionType.BACKUP_INITIAL:
      return {
        response: 'Click button to backup data',
      };
    default:
      return state;
  }
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

export default {
  backupState,
  user,
};
