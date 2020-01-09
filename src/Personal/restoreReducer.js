import { actionType } from './actionCreator';

const initialRestore = {
  isInProgress: false,
  error: '',
  lastRestoreDate: null,
};

const restoreState = (state = initialRestore, action) => {
  switch (action.type) {
    case actionType.RESTORE_START:
      return {
        ...state,
        isInProgress: true,
        error: '',
      };
    case actionType.RESTORE_SUCCESSFUL:
      return {
        ...state,
        isInProgress: false,
        lastRestoreDate: action.payload,
        error: '',
      };
    case actionType.RESTORE_FAILED:
      return {
        ...state,
        isInProgress: false,
        error: action.payload,
        lastRestoreDate: null,
      };
    default:
      return state;
  }
};

export default restoreState;
