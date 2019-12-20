import { actionType } from './actionCreator';

const initialState = {
  response: 'Click button to backup data',
};

export default (state = initialState, action) => {
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
