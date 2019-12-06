import { setNewTransactionAmount } from '../Stats/actionCreator';

export default function numHandler(val, dispatch) {
  if (val === '') {
    dispatch(setNewTransactionAmount(null));
    return;
  }

  const charList = val.split('');
  const charListLen = charList.length;
  if (charList[charListLen - 1] === '.' && val.indexOf('.') !== charListLen - 1) {
    if (charListLen === 1) {
      dispatch(setNewTransactionAmount(null));
    } else {
      dispatch(setNewTransactionAmount(val.substr(0, charListLen - 1)));
    }
    return;
  }

  if (val.indexOf('.') === -1 || val.toString().search(/^\d+\.\d{0,2}$/) >= 0) {
    dispatch(setNewTransactionAmount(val));
  }
}
