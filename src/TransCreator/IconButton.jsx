import React from 'react';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';
import btnColor from '../Common/Color';
import styles from './Style';

const IconButton = ({ iconName, onPress }) => (
  <Button
    type="outline"
    icon={{
      name: iconName,
      size: 25,
      color: btnColor.grey,
    }}
    buttonStyle={styles.keyboardBtn}
    onPress={onPress}
  />
);

IconButton.propTypes = {
  iconName: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default IconButton;
