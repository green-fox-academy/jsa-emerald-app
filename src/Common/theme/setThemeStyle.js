const setThemeStyle = (mode) => {
  let style;
  switch (mode) {
    case 'Light':
      style = require('../themeStyleLight');
      break;
    case 'Dark':
      style = require('../themeStyleDark');
      break;
    case 'EPAM':
      style = require('../themeStyleEpam');
      break;
    default:
      break;
  }
  return style.default;
};

export default setThemeStyle;
