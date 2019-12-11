import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';
import themeColor from './Color';

export default function GradientIcon(props) {
  const { name } = props;
  const { color } = props;
  return (
    <LinearGradient
      colors={themeColor.gradientColor[color]}
      start={[0.1, 0.9]}
      end={[0.9, 0.1]}
      style={{
        borderRadius: 23, padding: 8,
      }}
    >
      <Icon name={name} color="white" size={30} />
    </LinearGradient>
  );
}

GradientIcon.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
};

GradientIcon.defaultProps = {
  name: '',
  color: '',
};
