import React from 'react';
import {
  View, Text,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import setThemeStyle from '../Common/theme/setThemeStyle';
import themeColor from '../Common/Color';
import styles from './Style';

export default function PageBanner({
  transLabel, transType, transAmount, expStr,
}) {
  let displayAmount = transAmount === '' ? '0.00' : transAmount;
  displayAmount = transType === 'Expense' ? `-$${displayAmount}` : `$${displayAmount}`;
  const { themeMode } = useSelector((state) => state.theme);
  const themeStyleLight = setThemeStyle(themeMode);
  return (
    <LinearGradient
      colors={transType === 'Expense' ? themeColor.gradientColor.red : themeColor.gradientColor.green}
      start={[0.1, 0.9]}
      end={[0.9, 0.1]}
    >
      {transLabel.name ? (
        <View style={[themeStyleLight.headerFormat, styles.headerFormat, { backgroundColor: 'rgba(255,0,0,0)' }]}>
          <View style={styles.headerContainer}>
            <Icon name={transLabel.icon} type={transLabel.iconFamily} color="#ffffff" size={40} />
            <Text style={[styles.headerText, { color: '#ffffff' }]}>{transLabel.name || 'undefined'}</Text>
          </View>
          <View style={styles.headerDigitSection}>
            <Text style={styles.headerDigitResult}>{displayAmount}</Text>
            <Text style={styles.headerDigitExp}>{expStr}</Text>
          </View>
        </View>
      )
        : (
          <View style={[themeStyleLight.headerFormat, styles.headerFormat]}>
            <Text style={[styles.headerText, { color: 'white' }]}>Select a category</Text>
          </View>
        )}
    </LinearGradient>
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
  expStr: PropTypes.string,
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
  expStr: '',
};
