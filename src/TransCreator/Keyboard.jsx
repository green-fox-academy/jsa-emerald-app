import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';
import { push, pop, keyboardLayout } from './calculator';
import styles from './Style';
import DateSelector from './DateSelector';
import btnColor from '../Common/Color';

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

    if (pressedVal === 'Add') {
      createHandler();
    } else if (pressedVal === 'C') {
      updateCalDisplay('');
    } else if (pressedVal === 'Remove') {
      updateCalDisplay(pop(expStr));
    } else {
      updateCalDisplay(push(expStr, pressedVal));
    }
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
  expStr: PropTypes.string,
  createHandler: PropTypes.func.isRequired,
  transDate: PropTypes.number.isRequired,
  setTransDate: PropTypes.func.isRequired,
  updateCalDisplay: PropTypes.func.isRequired,
};

Keyboard.defaultProps = {
  calculable: '',
  expStr: '',
};
