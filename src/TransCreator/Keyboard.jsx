import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';
import moment from 'moment';
import Calculator, { keyboardLayout } from './calculator';
import styles from './Style';
import DateSelector from './DateSelector';

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

  const pressHandler = (val) => {
    if (!calculable) {
      return;
    }

    if (val === 'Add') {
      createHandler();
    } else if (val === 'C') {
      calculator.init();
    } else if (val === 'remove') {
      calculator.pop();
    } else {
      calculator.push(val);
    }
    setTransAmount(calculator.getResult());
    setTransExpression(calculator.getOperation());
  };

  const numberBtn = (val) => (
    <Button
      type="outline"
      buttonStyle={styles.keyboardBtn}
      title={val.toString()}
      titleStyle={{ color: 'rgb(45,45,67)' }}
      onPress={() => pressHandler(val)}
    />
  );

  const iconBtn = (name, val) => (
    <Button
      type="outline"
      icon={{
        name,
        size: 25,
        color: 'rgb(45,45,67)',
      }}
      buttonStyle={styles.keyboardBtn}
      onPress={() => pressHandler(val)}
    />
  );

  const btnSelector = (val) => {
    if (val === 'Add') {
      return iconBtn('playlist-add', val);
    }
    if (val === 'remove') {
      return iconBtn('backspace', val);
    }
    return numberBtn(val);
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
  transDate: PropTypes.number,
  setTransAmount: PropTypes.func,
  createHandler: PropTypes.func,
  setTransExpression: PropTypes.func,
  setTransDate: PropTypes.func,
};

Keyboard.defaultProps = {
  calculable: '',
  transDate: moment().unix(),
  setTransAmount: null,
  createHandler: null,
  setTransExpression: null,
  setTransDate: null,
};
