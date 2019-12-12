import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';
import styles from './Style';

const LabelGroupSelector = ({ transType, setTransType, setTransIcon }) => (
  <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 20 }}>
    <Button
      buttonStyle={transType === 'Expense' ? [styles.transTypeButton, styles.transTypeButtonActive] : styles.transTypeButton}
      titleStyle={transType === 'Expense' ? [styles.transTypeTitle, styles.transTypeTitleActive] : styles.transTypeTitle}
      title="Expense"
      type="outline"
      onPress={() => { setTransIcon({}); setTransType('Expense'); }}
    />
    <Button
      buttonStyle={transType === 'Income' ? [styles.transTypeButton, styles.transTypeButtonActive] : styles.transTypeButton}
      titleStyle={transType === 'Income' ? [styles.transTypeTitle, styles.transTypeTitleActive] : styles.transTypeTitle}
      title="Income"
      type="outline"
      onPress={() => { setTransIcon({}); setTransType('Income'); }}
    />
  </View>
);

LabelGroupSelector.propTypes = {
  transType: PropTypes.string,
  setTransType: PropTypes.func,
  setTransIcon: PropTypes.func,
};

LabelGroupSelector.defaultProps = {
  transType: 'Expense',
  setTransType: null,
  setTransIcon: null,
};

export default LabelGroupSelector;
