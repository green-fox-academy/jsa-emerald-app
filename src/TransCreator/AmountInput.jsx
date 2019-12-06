import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';
import { Input, Text } from 'native-base';
import { Platform } from 'react-native';
import styles from './Style';
import numHandler from './utilityMethod';

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
