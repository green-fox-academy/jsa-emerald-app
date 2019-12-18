import React, { useState } from 'react';
import { Dimensions, View } from 'react-native';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';
import Calculator from './calculator';

const DeviceWidth = Dimensions.get('window').width;

export default function Keyboard({
  calculable, setTransExpression, setTransAmount, createHandler,
}) {
  const keyboard = [
    [1, 4, 7, 'C'],
    [2, 5, 8, '0'],
    [3, 6, 9, '.'],
    ['+', '-', 'remove', 'Add'],
  ];

  const [calculator, setCalculator] = useState(new Calculator());

  const pressHandler = (val) => {
    if (!calculable) {
      return;
    }

    if (val === 'Add') {
      createHandler();
    } else if (val === 'C') {
      setTransAmount(calculator.init());
    } else if (val === 'remove') {
      setTransAmount(calculator.pop());
    } else {
      setTransAmount(calculator.push(val));
    }
    setTransExpression(calculator.getOperation());
  };

  const numberBtn = (val) => (
    <Button
      type="outline"
      buttonStyle={{
        height: DeviceWidth * 0.15,
        width: DeviceWidth * 0.25,
        borderRadius: 0,
        borderColor: 'rgb(240,240,240)',
      }}
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
      buttonStyle={{
        height: DeviceWidth * 0.15,
        width: DeviceWidth * 0.25,
        borderRadius: 0,
        borderColor: 'rgb(240,240,240)',
      }}
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
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      bottom: 0,
    }}
    >
      <View style={{
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      >
        {keyboard.map((row, idx) => (
          <View key={`row${idx + 1}`}>
            {row.map((cell, idx2) => (
              <View
                key={`cell${idx + 1}-${idx2 + 1}`}
              >
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
  transAmount: PropTypes.string,
  setTransAmount: PropTypes.func,
  createHandler: PropTypes.func,
};

Keyboard.defaultProps = {
  calculable: '',
  transAmount: '',
  setTransAmount: null,
  createHandler: null,
};
