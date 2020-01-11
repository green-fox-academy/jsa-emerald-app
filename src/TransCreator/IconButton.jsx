import React from 'react';
import { Button } from 'react-native-elements';
import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';
import btnColor from '../Common/Color';
import setThemeStyle from '../Common/theme/setThemeStyle';
import styles from './Style';

const IconButton = ({ iconName, onPress }) => {
  const { themeMode } = useSelector((state) => state.theme);
  const theme = setThemeStyle(themeMode);
  return (
    <Button
      type="outline"
      icon={{
        name: iconName,
        size: 25,
        color: theme.mainColor.color,
      }}
      buttonStyle={[styles.keyboardBtn, { borderColor: theme.mainColor.borderColor }]}
      onPress={onPress}
    />
  )
};

IconButton.propTypes = {
  iconName: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default IconButton;
