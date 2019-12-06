import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';
import { Input, Text } from 'native-base';
import { Platform } from 'react-native';
import styles from './Style';
import { setNewTransactionAmount } from '../Stats/redux/actionCreator';

const numHandler = (val, dispatch) => {
  if (val === '') {
    dispatch(setNewTransactionAmount(null));
    return;
  }

  const charList = val.split('');
  const charListLen = charList.length;
  if (charList[charListLen - 1] === '.' && val.indexOf('.') !== charListLen - 1) {
    if (charListLen === 1) {
      dispatch(setNewTransactionAmount('0.00'));
    } else {
      dispatch(setNewTransactionAmount(val.substr(0, charListLen - 1)));
    }
    return;
  }

  if (val.indexOf('.') === -1 || val.toString().search(/^\d+\.\d{0,2}$/) >= 0) {
    dispatch(setNewTransactionAmount(val));
  }
};

export default () => {
  const { newTransAmount } = useSelector((state) => state.transactions);
  const dispatch = useDispatch();
  return (
    <>
      <MaterialIcons name="attach-money" style={styles.amountInputIcon} />
      <Text>General</Text>
      <Input
        keyboardType={Platform.OS === 'ios' ? 'numeric' : 'decimal-pad'}
        placeholder="0.00"
        value={newTransAmount ? newTransAmount.toString() : null}
        style={styles.amountInput}
        onChangeText={(val) => numHandler(val, dispatch)}
      />
    </>
  );
};
