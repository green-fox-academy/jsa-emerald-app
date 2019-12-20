import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import {
  append, removeLast, keyboardLayout, getResult,
} from './CalculatorHelper';
import styles from './Style';
import DateSelector from './DateSelector';
import KeyboardButton from './KeyboardButton';

export default function Keyboard({
  calculable,
  expStr,
  createHandler,
  transDate,
  setTransDate,
  onExpressionsChange,
}) {
  const wrapResult = (exp) => ({
    expression: exp,
    result: getResult(exp),
  });

  const pressHandler = (pressedVal) => {
    if (!calculable) {
      return;
    }

    switch (pressedVal) {
      case 'Add':
        createHandler();
        break;
      case 'C':
        onExpressionsChange(wrapResult(''));
        break;
      case 'Remove':
        onExpressionsChange(wrapResult(removeLast(expStr)));
        break;
      default:
        onExpressionsChange(wrapResult(append(expStr, pressedVal)));
    }
  };

  return (
    <View style={styles.keyboardLayout}>
      <DateSelector transDate={transDate} setTransDate={setTransDate} />
      <View style={styles.keyboardRowLayout}>
        {keyboardLayout.map((row, idx) => (
          <View key={`row${idx + 1}`}>
            {row.map((cell, idx2) => (
              <View key={`cell${idx + 1}-${idx2 + 1}`}>
                <KeyboardButton btnVal={cell} pressHandler={pressHandler} />
              </View>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
}

Keyboard.propTypes = {
  calculable: PropTypes.bool.isRequired,
  expStr: PropTypes.string,
  createHandler: PropTypes.func.isRequired,
  transDate: PropTypes.number.isRequired,
  setTransDate: PropTypes.func.isRequired,
  onExpressionsChange: PropTypes.func.isRequired,
};

Keyboard.defaultProps = {
  expStr: '',
};
