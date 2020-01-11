import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import setThemeStyle from '../Common/theme/setThemeStyle';
import {
  append, removeLast, keyboardLayout, getResult,
} from './Calculator';
import styles from './Style';
import DateSelector from './DateSelector';
import KeyboardButton from './KeyboardButton';

export default function CalculatorKeyboard({
  calculable,
  expStr,
  createHandler,
  transDate,
  setTransDate,
  onExpressionChange,
}) {
  const { themeMode } = useSelector((state) => state.theme);
  const theme = setThemeStyle(themeMode);

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
        onExpressionChange(wrapResult(''));
        break;
      case 'Remove':
        onExpressionChange(wrapResult(removeLast(expStr)));
        break;
      default:
        onExpressionChange(wrapResult(append(expStr, pressedVal)));
    }
  };

  return (
    <View style={styles.keyboardLayout}>
      <DateSelector transDate={transDate} setTransDate={setTransDate} />
      <View style={[styles.keyboardRowLayout, { backgroundColor: theme.mainColor.backgroundColor }]}>
        {keyboardLayout.map((row, idx) => (
          <View key={`row${idx + 1}`} >
            {row.map((cell, idx2) => (
              <View key={`cell${idx + 1}-${idx2 + 1}`}>
                <KeyboardButton btnVal={cell.toString()} pressHandler={pressHandler} />
              </View>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
}

CalculatorKeyboard.propTypes = {
  calculable: PropTypes.bool.isRequired,
  expStr: PropTypes.string,
  createHandler: PropTypes.func.isRequired,
  transDate: PropTypes.number.isRequired,
  setTransDate: PropTypes.func.isRequired,
  onExpressionChange: PropTypes.func.isRequired,
};

CalculatorKeyboard.defaultProps = {
  expStr: '',
};
