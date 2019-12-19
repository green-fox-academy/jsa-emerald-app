import { actionType } from './actionCreator';

const initialState = {
  loading: false,
  transactions: [],
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.BACKUP_REQUEST:
      return {
        ...state,
        transactions: [...state.transactions, { ...action.data }],
      };

    default:
      return state;
  }
};
