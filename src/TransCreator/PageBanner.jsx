import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';

import PropTypes from 'prop-types';
import themeStyle from '../Common/themeStyle';
import themeColor from '../Common/Color';
import styles from './Style';

export default function PageBanner({
  transLabel, transType, transAmount,
}) {
  let displayAmount = transAmount === '' ? '0.00' : transAmount;
  displayAmount = transType === 'Expense' ? `-$${displayAmount}` : `+$${displayAmount}`;
  return (
    transLabel.name
      ? (
        <LinearGradient
          colors={transType === 'Expense' ? themeColor.gradientColor.red : themeColor.gradientColor.green}
          start={[0.1, 0.9]}
          end={[0.9, 0.1]}
        >
          <View style={[themeStyle.headerFormat, styles.headerFormat]}>
            <View style={styles.headerContainer}>
              <Icon name={transLabel.icon} type={transLabel.iconFamily} color="#ffffff" size={40} />
              <Text style={[styles.headerText, { color: '#ffffff' }]}>{transLabel.name || 'undefined'}</Text>
            </View>
            <Text style={{ color: '#ffffff', fontSize: 20, fontWeight: '400' }}>{ displayAmount }</Text>
          </View>
        </LinearGradient>
      )
      : (
        <View style={[themeStyle.headerFormat, styles.headerFormat]}>
          <Text style={styles.headerText}>Select a category</Text>
        </View>
      )
  );
}

PageBanner.propTypes = {
  transLabel: PropTypes.shape({
    name: PropTypes.string,
    icon: PropTypes.string,
    iconFamily: PropTypes.string,
    color: PropTypes.string,
  }),
  transType: PropTypes.string,
  transAmount: PropTypes.string,
  setTransAmount: PropTypes.func,
};

PageBanner.defaultProps = {
  transLabel: {
    name: '',
    icon: '',
    iconFamily: '',
    color: '',
  },
  transType: '',
  transAmount: '',
  setTransAmount: null,
};
