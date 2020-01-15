import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import setThemeStyle from '../Common/theme/setThemeStyle';

export default function PieLegend({ text, color }) {
  const { themeMode } = useSelector((state) => state.theme);
  const styles = setThemeStyle(themeMode);
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Icon type="octicon" color={color} name="primitive-dot" />
      <Text style={{ paddingLeft: 4, paddingRight: 6, color: styles.mainColor.color }}>{text}</Text>
    </View>
  );
}

PieLegend.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
};

PieLegend.defaultProps = {
  text: '',
  color: '',
};
