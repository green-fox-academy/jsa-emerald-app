import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';
import styles from './Style';

const TransactionTypeSelector = ({ transType, setTransType, setTransLabel }) => (
  <View style={styles.typeButtonGroup}>
    <Button
      buttonStyle={transType === 'Expense'
        ? [styles.typeButton, styles.typeButtonActive] : styles.typeButton}
      titleStyle={transType === 'Expense'
        ? [styles.typeTitle, styles.typeTitleActive] : styles.typeTitle}
      title="Expense"
      type="outline"
      onPress={() => { setTransLabel({}); setTransType('Expense'); }}
    />
    <Button
      buttonStyle={transType === 'Income'
        ? [styles.typeButton, styles.typeButtonActive] : styles.typeButton}
      titleStyle={transType === 'Income'
        ? [styles.typeTitle, styles.typeTitleActive] : styles.typeTitle}
      title="Income"
      type="outline"
      onPress={() => { setTransLabel({}); setTransType('Income'); }}
    />
  </View>
);

TransactionTypeSelector.propTypes = {
  transType: PropTypes.string,
  setTransType: PropTypes.func,
  setTransLabel: PropTypes.func,
};

TransactionTypeSelector.defaultProps = {
  transType: 'Expense',
  setTransType: null,
  setTransLabel: null,
};

export default TransactionTypeSelector;
