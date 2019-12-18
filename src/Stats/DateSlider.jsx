import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Button } from 'react-native-elements';

export default function DateSlider(props) {
  const { viewSet, onPressBtn, viewType } = props;
  const format = viewType === 'month' ? 'MMM YYYY' : 'YYYY';

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
      <Button
        containerStyle={{ flex: 1, borderBottomWidth: 2, borderBottomColor: 'white' }}
        title={viewSet[0].format(format)}
        type="clear"
        titleStyle={{ color: 'grey' }}
        onPress={() => onPressBtn(viewSet[0], viewType)}
      />
      <View style={{
        flex: 1, borderBottomWidth: 2, borderBottomColor: '#30d29d', justifyContent: 'center',
      }}
      >
        <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: '500' }}>{viewSet[1].format(format)}</Text>
      </View>
      <Button
        containerStyle={{ flex: 1, borderBottomWidth: 2, borderBottomColor: 'white' }}
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
