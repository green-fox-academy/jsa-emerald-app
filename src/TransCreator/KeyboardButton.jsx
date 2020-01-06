import React from 'react';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';
import btnColor from '../Common/Color';
import IconButton from './IconButton';
import styles from './Style';

const NumberBtn = ({ btnVal, onPress }) => (
  <Button
    type="outline"
    buttonStyle={styles.keyboardBtn}
    title={btnVal.toString()}
    titleStyle={{ color: btnColor.grey }}
    onPress={onPress}
  />
);

const KeyboardButton = ({ btnVal, pressHandler }) => {
  switch (btnVal) {
    case 'Add':
      return <IconButton id="btn-keyboard-add" iconName="playlist-add" onPress={() => pressHandler(btnVal)} />;
    case 'Remove':
      return <IconButton id="btn-keyboard-remove" iconName="backspace" onPress={() => pressHandler(btnVal)} />;
    default:
      return <NumberBtn id="btn-keyboard-digit" btnVal={btnVal} onPress={() => pressHandler(btnVal)} />;
  }
};

NumberBtn.propTypes = {
  btnVal: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

KeyboardButton.propTypes = {
  btnVal: PropTypes.string.isRequired,
  pressHandler: PropTypes.func.isRequired,
};

export default KeyboardButton;
