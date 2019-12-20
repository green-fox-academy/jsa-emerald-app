import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { push, pop, keyboardLayout } from './calculator';
import styles from './Style';
import DateSelector from './DateSelector';
import KeyboardButton from './KeyboardButton';

export default function Keyboard({
  calculable,
  expStr,
  createHandler,
  transDate,
  setTransDate,
  updateCalDisplay,
}) {
  const pressHandler = (pressedVal) => {
    if (!calculable) {
      return;
    }

    switch (pressedVal) {
      case 'Add':
        createHandler();
        break;
      case 'C':
        updateCalDisplay('');
        break;
      case 'Remove':
        updateCalDisplay(pop(expStr));
        break;
      default:
        updateCalDisplay(push(expStr, pressedVal));
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
  updateCalDisplay: PropTypes.func.isRequired,
};

Keyboard.defaultProps = {
  expStr: '',
};
