export default (val) => {
  if (val === '') {
    return null;
  }

  if (val.indexOf('.') === -1 || val.toString().search(/^\d+\.\d{0,2}$/) >= 0) {
    return val;
  }

  const charList = val.split('');
  const charListLen = charList.length;
  if (charListLen === 1) {
    return null;
  }
  return (val.substr(0, charListLen - 1));
};
