import React from 'react';
import {
  View, Text, Platform,
} from 'react-native';
import { Input, Icon } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';

import PropTypes from 'prop-types';
import themeStyle from '../Common/themeStyle';
import themeColor from '../Common/Color';
import styles from './Style';
import numDecorator from './numericInputDecorator';

export default function LabelHeader({
  transIcon, transType, transAmount, setTransAmount,
}) {
  return (
    transIcon.label
      ? (
        <LinearGradient
          colors={transType === 'Expense' ? themeColor.gradientColor.red : themeColor.gradientColor.green}
          start={[0.1, 0.9]}
          end={[0.9, 0.1]}
        >
          <View style={[themeStyle.headerFormat, styles.headerFormat]}>
            <View style={styles.headerContainer}>
              <Icon name={transIcon.icon} type={transIcon.iconFamily} color="#ffffff" size={40} />
              <Text style={[styles.headerText, { color: '#ffffff' }]}>{transIcon.label || 'undefined'}</Text>
            </View>
            <Text style={{ color: '#ffffff', fontSize: 20, fontWeight: '400' }}>{ transType === 'Expense' ? `-$${transAmount}` : `+$${transAmount}` }</Text>
            {/* <Input
              placeholder="$ 0.00"
              keyboardType={Platform.OS === 'ios' ? 'numeric' : 'decimal-pad'}
              inputStyle={[styles.headerText, { textAlign: 'right', color: '#ffffff' }]}
              value={transAmount ? transAmount.toString() : null}
              containerStyle={{ width: 150 }}
              inputContainerStyle={{ borderBottomWidth: 0 }}
              onChangeText={(val) => setTransAmount(numDecorator(val))}
            /> */}
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

LabelHeader.propTypes = {
  transIcon: PropTypes.shape({
    label: PropTypes.string,
    icon: PropTypes.string,
    iconFamily: PropTypes.string,
    color: PropTypes.string,
  }),
  transType: PropTypes.string,
  transAmount: PropTypes.number,
  setTransAmount: PropTypes.func,
};

LabelHeader.defaultProps = {
  transIcon: {
    label: '',
    icon: '',
    iconFamily: '',
    color: '',
  },
  transType: '',
  transAmount: 0,
  setTransAmount: null,
};
