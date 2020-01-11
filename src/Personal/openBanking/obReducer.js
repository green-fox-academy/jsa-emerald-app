import { actionType } from './actionCreator';

const initialOB = {
  bankList: [],
  accountList: [],
  transactions: [],
};

const backupState = (state = initialOB, action) => {
  switch (action.type) {
    case actionType.SET_BANK_LIST:
      return { ...state, bankList: action.payload };
    default:
      return state;
  }
};

export default backupState;
