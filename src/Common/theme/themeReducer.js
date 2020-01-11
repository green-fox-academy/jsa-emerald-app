import { actionType } from './actionCreator';

const initialTheme = {
  themeMode: 'light',
};

const theme = (state = initialTheme, action) => {
  switch (action.type) {
    case actionType.UPDATE_MODE:
      return {
        ...state,
        themeMode: action.mode,
      };
    default:
      return state;
  }
};

export default theme;
