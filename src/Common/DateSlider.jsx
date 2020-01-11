import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import setThemeStyle from './theme/setThemeStyle';


export default function DateSlider(props) {
  const { themeMode } = useSelector((state) => state.theme);
  const styles = setThemeStyle(themeMode);
  const { viewSet, onPressBtn, viewType } = props;
  const format = viewType === 'month' ? 'MMM YYYY' : 'YYYY';

  return (
    <View style={styles.dateContainer}>
      <Button
        containerStyle={styles.dateNormal}
        title={viewSet[0].format(format)}
        type="clear"
        titleStyle={{ color: 'grey' }}
        onPress={() => onPressBtn(viewSet[0], viewType)}
      />
      <View style={styles.dateHighlight}>
        <Text style={styles.dateText}>{viewSet[1].format(format)}</Text>
      </View>
      <Button
        containerStyle={styles.dateNormal}
        title={viewSet[2].format(format)}
        type="clear"
        titleStyle={{ color: 'grey' }}
        onPress={() => onPressBtn(viewSet[2], viewType)}
      />
    </View>
  );
}

DateSlider.propTypes = {
  viewSet: PropTypes.instanceOf(Array),
  onPressBtn: PropTypes.func.isRequired,
  viewType: PropTypes.oneOf(['month', 'year']),
};

DateSlider.defaultProps = {
  viewSet: [],
  viewType: 'month',
};
