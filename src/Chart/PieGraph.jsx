import React from 'react';
import { Animated, View, Easing } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import PieLegend from './PieLegend';
import setThemeStyle from '../Common/theme/setThemeStyle';

export default function PieGraph({ graphDataSet }) {
  const { themeMode } = useSelector((state) => state.theme);
  const styles = setThemeStyle(themeMode);
  const spinValue = new Animated.Value(0);
  const { dataSet, legendSet } = graphDataSet;
  Animated.timing(spinValue, {
    toValue: 1,
    duration: 900,
    easing: Easing.bounce,
  }).start();

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '90deg'],
  });

  dataSet.forEach((item) => {
    const value = item;
    value.legendFontColor = styles.mainColor.color;
    return value;
  });

  const chartConfig = {
    backgroundGradientFrom: '#e96d9e',
    backgroundGradientTo: '#ffaa8f',
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    strokeWidth: 2,
  };

  return (
    <View style={{ flex: 1 }}>
      <Animated.View style={{ transform: [{ rotate: spin }], justifyContent: 'center', alignItems: 'center' }}>
        <PieChart
          data={dataSet}
          width={220}
          height={220}
          accessor="total"
          backgroundColor="transparent"
          chartConfig={chartConfig}
          paddingLeft="55"
          hasLegend={false}
        />
      </Animated.View>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flex: 1, flexWrap: 'wrap' }}>
        {legendSet.map((item, idx) => <PieLegend key={`PieLegend:${idx + 1}`} text={item.name} color={item.color} />)}
      </View>
    </View>
  );
}

PieGraph.propTypes = {
  graphDataSet: PropTypes.shape({
    dataSet: PropTypes.array,
    legendSet: PropTypes.array,
  }).isRequired,
};
