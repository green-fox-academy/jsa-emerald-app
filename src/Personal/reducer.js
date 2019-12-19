import { actionType } from './actionCreator';

const initialState = {
  loading: false,
  stateCode: 0,
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.BACKUP_DATA:
      return {
        ...state,
        loading: true,
        stateCode: action.payload,
      };

    default:
      return state;
  }
};
