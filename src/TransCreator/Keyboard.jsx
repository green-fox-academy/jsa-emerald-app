import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';
import Calculator, { keyboardLayout } from './calculator';
import styles from './Style';
import DateSelector from './DateSelector';
import btnColor from '../Common/Color';

export default function Keyboard({
  calculable,
  setTransExpression,
  setTransAmount,
  createHandler,
  transDate,
  setTransDate,
}) {
  const [calculator, setCalculator] = useState(null);
  useEffect(() => setCalculator(new Calculator()), []);

  const pressHandler = (pressedVal) => {
    if (!calculable) {
      return;
    }

    if (pressedVal === 'Add') {
      createHandler();
    } else if (pressedVal === 'C') {
      calculator.init();
    } else if (pressedVal === 'Remove') {
      calculator.pop();
    } else {
      calculator.push(pressedVal);
    }
    setTransAmount(calculator.getResult());
    setTransExpression(calculator.getOperation());
  };

  const numberBtn = (btnVal) => (
    <Button
      type="outline"
      buttonStyle={styles.keyboardBtn}
      title={btnVal.toString()}
      titleStyle={{ color: btnColor.grey }}
      onPress={() => pressHandler(btnVal)}
    />
  );

  const iconBtn = (iconName, btnVal) => (
    <Button
      type="outline"
      icon={{
        name: iconName,
        size: 25,
        color: btnColor.grey,
      }}
      buttonStyle={styles.keyboardBtn}
      onPress={() => pressHandler(btnVal)}
    />
  );

  const btnSelector = (btnVal) => {
    if (btnVal === 'Add') {
      return iconBtn('playlist-add', btnVal);
    }
    if (btnVal === 'Remove') {
      return iconBtn('backspace', btnVal);
    }
    if (btnVal === 'C') {
      return numberBtn('C');
    }

    return numberBtn(btnVal);
  };

  return (
    <View style={styles.keyboardLayout}>
      <DateSelector transDate={transDate} setTransDate={setTransDate} />
      <View style={styles.keyboardRowLayout}>
        {keyboardLayout.map((row, idx) => (
          <View key={`row${idx + 1}`}>
            {row.map((cell, idx2) => (
              <View key={`cell${idx + 1}-${idx2 + 1}`}>
                {btnSelector(cell)}
              </View>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
}

Keyboard.propTypes = {
  calculable: PropTypes.string,
  transDate: PropTypes.number.isRequired,
  setTransAmount: PropTypes.func.isRequired,
  createHandler: PropTypes.func.isRequired,
  setTransExpression: PropTypes.func.isRequired,
  setTransDate: PropTypes.func.isRequired,
};

Keyboard.defaultProps = {
  calculable: '',
};
