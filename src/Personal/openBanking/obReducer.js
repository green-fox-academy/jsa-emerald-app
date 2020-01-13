import { actionType } from './actionCreator';

const initialOB = {
  bankList: [],
  accountID: null,
  accountCode: null,
  accessToken: null,
  accountList: [],
  transactions: [],
};

const backupState = (state = initialOB, action) => {
  switch (action.type) {
    case actionType.SET_BANK_LIST:
      return {
        ...state,
        bankList: action.payload,
      };
    case actionType.SET_BANK_ID_CODE:
      return {
        ...state,
        accountID: action.payload.id,
        accountCode: action.payload.code,
      };
    case actionType.SET_BANK_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: action.payload,
      };
    case actionType.SET_ACCOUNT_LIST:
      return {
        ...state,
        accountList: action.payload,
      };
    case actionType.SET_ACCOUNT_TRANSACTION:
      return {
        ...state,
        transactions: action.payload,
      };
    default:
      return state;
  }
};

export default backupState;
