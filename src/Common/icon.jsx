import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';
import fadeHex from './colorConvert';

export default function GradientIcon(props) {
  const { name, color, iconFamily } = props;
  return (
    <LinearGradient
      colors={[color, fadeHex(color)]}
      start={[0.1, 0.9]}
      end={[0.9, 0.2]}
      style={{
        borderRadius: 23, padding: 8,
      }}
    >
      <Icon name={name} color="white" size={30} type={iconFamily} />
    </LinearGradient>
  );
}

GradientIcon.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  iconFamily: PropTypes.string,
};

GradientIcon.defaultProps = {
  name: '',
  color: '',
  iconFamily: '',
};
