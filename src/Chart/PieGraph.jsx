import React from 'react';
import { Dimensions } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import setThemeStyle from '../Common/theme/setThemeStyle';

export default function PieGraph({ dataSet }) {
  const { themeMode } = useSelector((state) => state.theme);
  const styles = setThemeStyle(themeMode);
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
  const screenWidth = Dimensions.get('window').width * 0.85;

  return (
    <PieChart
      data={dataSet}
      width={screenWidth}
      height={220}
      accessor="total"
      backgroundColor="transparent"
      chartConfig={chartConfig}
      paddingLeft="15"
    />
  );
}

PieGraph.propTypes = {
  dataSet: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, color: PropTypes.string, total: PropTypes.number }),
  ),
};

PieGraph.defaultProps = {
  dataSet: [],
};
