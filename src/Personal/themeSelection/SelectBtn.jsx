import React from 'react';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';
import styles from '../../Common/themeStyleLight';

export default function SelectBtn({ title, onClick, clickedMode }) {
  return (
    <Button
      title={title}
      type="outline"
      buttonStyle={styles.themeBtn}
      disabledStyle={styles.disabledThemeBtn}
      disabledTitleStyle={{ color: 'white' }}
      titleStyle={{ fontSize: 16, color: '#5C6BC0' }}
      disabled={title === clickedMode}
      onPress={onClick}
    />
  );
}

SelectBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  clickedMode: PropTypes.string.isRequired,
};