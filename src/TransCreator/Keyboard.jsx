import React, { useState } from 'react';
import { Dimensions, View } from 'react-native';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';

const DeviceWidth = Dimensions.get('window').width;

export default function Keyboard({
  transLabel, transAmount, setTransAmount, createHandler,
}) {
  const keyboard = [
    [1, 4, 7, 'C'],
    [2, 5, 8, '0'],
    [3, 6, 9, '.'],
    ['+', '-', 'remove', 'Add'],
  ];

  const [float, setFloat] = useState(false);
  const isNumber = (value) => !Number.isNaN(parseFloat(value));

  const pressHandler = (val) => {
    if (!transLabel.name) {
      return;
    }

    if (isNumber(val)) {
      if (float && (parseInt(transAmount, 10) !== parseFloat(transAmount, 10) || transAmount !== `${parseInt(transAmount, 10)}`)) {
        if (transAmount.split('.')[1].length < 2) {
          setTransAmount(`${transAmount}${val}`);
        }
      } else if (float) {
        setTransAmount(`${transAmount}.${val}`);
      } else {
        setTransAmount(`${transAmount}${val}`);
      }
      return;
    }

    const temp = transAmount.toString().slice(0, -1);
    switch (val) {
      case 'C':
        setTransAmount('');
        setFloat(false);
        break;
      case '.':
        setFloat(true);
        break;
      case 'remove':
        if (transAmount.toString().indexOf('.') > -1) {
          setFloat(false);
        }
        setTransAmount(temp);
        break;
      case 'Add':
        createHandler();
        setFloat(false);
        break;
      case '+':
        break;
      case '-':
        break;
      default:
        break;
    }
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
  transLabel: PropTypes.shape({
    name: PropTypes.string,
    icon: PropTypes.string,
    iconFamily: PropTypes.string,
    color: PropTypes.string,
  }),
  transAmount: PropTypes.string,
  setTransAmount: PropTypes.func,
  createHandler: PropTypes.func,
};

Keyboard.defaultProps = {
  transLabel: {
    name: '',
    icon: '',
    iconFamily: '',
    color: '',
  },
  transAmount: '',
  setTransAmount: null,
  createHandler: null,
};
