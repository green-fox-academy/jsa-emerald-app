import { actionType } from './actionCreator';

const initialBackup = {
  isInProgress: false,
  error: '',
  lastBackupDate: null,
};

const backupState = (state = initialBackup, action) => {
  switch (action.type) {
    case actionType.BACKUP_START:
      return {
        ...state,
        isInProgress: true,
      };
    case actionType.BACKUP_SUCCESSFUL:
      return {
        ...state,
        isInProgress: false,
        lastBackupDate: action.payload,
      };
    case actionType.BACKUP_FAILED:
      return {
        ...state,
        isInProgress: false,
        lastBackupDate: 0,
      };
    default:
      return state;
  }
};

export default backupState;
