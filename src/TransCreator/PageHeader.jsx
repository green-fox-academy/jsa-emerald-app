import React from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';
import styles from '../Common/themeStyle';
import themeColor from '../Common/Color';

export default function LabelHeader({ icon, type, amount }) {
  const money = amount || 0;
  return (
    icon.label
      ? (
        <LinearGradient
          colors={type === 'Expense' ? themeColor.gradientColor.red : themeColor.gradientColor.green}
          start={[0.1, 0.9]}
          end={[0.9, 0.1]}
        >
          <View style={[styles.headerFormat, { height: 140 }]}>
            <View style={{ alignItems: 'flex-start' }}>
              <Icon name={icon.icon} type={icon.iconFamily} color="#ffffff" size={40} />
              <Text style={{ color: '#ffffff', fontSize: 20, fontWeight: '400' }}>{icon.label || 'undefined'}</Text>
            </View>
            <Text style={{ color: '#ffffff', fontSize: 20, fontWeight: '400' }}>{ type === 'Expense' ? `-$${money}` : `+$${money}` }</Text>
          </View>
        </LinearGradient>
      )
      : (
        <View style={
          [styles.headerFormat, { backgroundColor: '#ffffff', height: 140 }]
        }
        >
          <Text style={{ fontSize: 20, fontWeight: '400' }}>Select a category</Text>
        </View>
      )
  );
}

LabelHeader.propTypes = {
  icon: PropTypes.shape({
    label: PropTypes.string,
    icon: PropTypes.string,
    iconFamily: PropTypes.string,
    color: PropTypes.string,
  }),
  type: PropTypes.string,
  amount: PropTypes.string,
};

LabelHeader.defaultProps = {
  icon: {
    label: '',
    icon: '',
    iconFamily: '',
    color: '',
  },
  type: '',
  amount: '',
};
