import React from 'react';
import { Button } from 'react-native-elements';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import btnColor from '../Common/Color';
import IconButton from './IconButton';
import styles from './Style';
import setThemeStyle from '../Common/theme/setThemeStyle';

const NumberBtn = ({ btnVal, onPress }) => {
  const { themeMode } = useSelector((state) => state.theme);
  const theme = setThemeStyle(themeMode);
  return (
    <Button
      type="outline"
      buttonStyle={[styles.keyboardBtn, { borderColor: theme.mainColor.borderColor }]}
      title={btnVal.toString()}
      titleStyle={{ color: theme.mainColor.color }}
      onPress={onPress}
    />
  );
};

const KeyboardButton = ({ btnVal, pressHandler }) => {
  switch (btnVal) {
    case 'Add':
      return <IconButton iconName="playlist-add" onPress={() => pressHandler(btnVal)} />;
    case 'Remove':
      return <IconButton iconName="backspace" onPress={() => pressHandler(btnVal)} />;
    default:
      return <NumberBtn btnVal={btnVal} onPress={() => pressHandler(btnVal)} />;
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
