import React from 'react';
import PropTypes from 'prop-types';
import { MaterialIcons } from '@expo/vector-icons';
import { Input, Text } from 'native-base';
import { Platform } from 'react-native';
import styles from './Style';
import numValidator from './numericInputValidator';

const AmountInput = ({ transAmount, setTransAmount }) => (
  <>
    <MaterialIcons name="attach-money" style={styles.amountInputIcon} />
    <Text>General</Text>
    <Input
      keyboardType={Platform.OS === 'ios' ? 'numeric' : 'decimal-pad'}
      placeholder="0.00"
      value={transAmount ? transAmount.toString() : null}
      style={styles.amountInput}
      onChangeText={(val) => setTransAmount(numValidator(val))}
    />
  </>
);

AmountInput.propTypes = {
  transAmount: PropTypes.string,
  setTransAmount: PropTypes.func,
};

AmountInput.defaultProps = {
  transAmount: null,
  setTransAmount: null,
};

export default AmountInput;
