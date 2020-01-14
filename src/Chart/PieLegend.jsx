import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';

export default function PieLegend({ text, color }) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Icon type="octicon" color={color} name="primitive-dot" />
      <Text style={{ paddingLeft: 4, paddingRight: 6 }}>{text}</Text>
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
