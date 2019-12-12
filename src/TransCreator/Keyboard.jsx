import React, { useState } from 'react';
import { Dimensions, View } from 'react-native';
import { Button } from 'react-native-elements';

const DeviceWidth = Dimensions.get('window').width;

export default ({
  transIcon, transAmount, setTransAmount, createHandler,
}) => {
  const keyboard = [
    [1, 4, 7, 'C'],
    [2, 5, 8, '0'],
    [3, 6, 9, '.'],
    ['+', '-', 'remove', 'Add'],
  ];
  const [float, setFloat] = useState(false);

  const isNumber = (value) => !Number.isNaN(parseFloat(value));

  const pressHandler = (val) => {
    if (!transIcon.label) {
      return;
    }

    if (isNumber(val)) {
      if (float && parseInt(transAmount, 10) !== transAmount) {
        setTransAmount(parseFloat(`${transAmount}${val}`));
      } else if (float) {
        setTransAmount(parseFloat(`${transAmount}.${val}`));
      } else {
        setTransAmount(parseFloat(`${transAmount}${val}`));
      }
      return;
    }

    const temp = parseFloat(transAmount.toString().slice(0, -1));
    switch (val) {
      case 'C':
        setTransAmount(0);
        setFloat(false);
        break;
      case '.':
        setFloat(true);
        break;
      case 'remove':
        if (transAmount.toString().indexOf('.') > -1) {
          setFloat(false);
        }
        if (!temp) {
          setTransAmount(0);
        } else {
          setTransAmount(temp);
        }
        break;
      case 'Add':
        createHandler();
        setFloat(false);
        break;
      default:
        break;
    }
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
                <Button
                  type="outline"
                  buttonStyle={{
                    height: DeviceWidth * 0.18,
                    width: DeviceWidth * 0.25,
                    borderRadius: 0,
                    borderColor: 'rgb(240,240,240)',
                  }}
                  title={cell.toString()}
                  titleStyle={{ color: 'rgb(45,45,67)' }}
                  onPress={() => pressHandler(cell)}
                />
              </View>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};
