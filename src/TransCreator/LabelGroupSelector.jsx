import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';
import styles from './Style';

const LabelGroupSelector = ({ transType, setTransType, setTransIcon }) => (
  <View style={styles.typeButtonGroup}>
    {['Expense', 'Income'].map((cate) => (
      <Button
        key={cate}
        buttonStyle={transType === cate
          ? [styles.typeButton, styles.typeButtonActive] : styles.typeButton}
        titleStyle={transType === cate
          ? [styles.typeTitle, styles.typeTitleActive] : styles.typeTitle}
        title={cate}
        type="outline"
        onPress={() => { setTransIcon({}); setTransType(cate); }}
      />
    ))}
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
