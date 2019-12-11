import React from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';
import styles from './themeStyle';
import themeColor from './Color';

export default function LabelHeader(props) {
  const {
    icon, name, type, amount,
  } = props;

  return (
    name
      ? (
        <LinearGradient
          colors={type === 'out' ? themeColor.gradientColor.red : themeColor.gradientColor.green}
          start={[0.1, 0.9]}
          end={[0.9, 0.1]}
        >
          <View style={[styles.headerFormat, { height: 140 }]}>
            <View style={{ alignItems: 'flex-start' }}>
              <Icon name={icon} color="#ffffff" size={40} />
              <Text style={{ color: '#ffffff', fontSize: 20, fontWeight: '400' }}>{name || 'undefined'}</Text>
            </View>
            <Text style={{ color: '#ffffff', fontSize: 20, fontWeight: '400' }}>{ type === 'out' ? `-$${amount}` : `+$${amount}` }</Text>

          </View>
        </LinearGradient>
      )
      : (
        <View style={
          [styles.headerFormat, { height: 140, backgroundColor: '#ffffff' }]
        }
        >
          <Text style={{ fontSize: 20, fontWeight: '400' }}>Select a category</Text>
        </View>
      )
  );
}

LabelHeader.propTypes = {
  icon: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.number,
};

LabelHeader.defaultProps = {
  icon: '',
  name: '',
  type: '',
  amount: 0,
};
