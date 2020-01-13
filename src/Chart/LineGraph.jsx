import React from 'react';
import { View, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import PropTypes from 'prop-types';

export default function LineGraph({ dataSet }) {
  const screenWidth = Dimensions.get('window').width * 0.85;

  const chartConfig = {
    backgroundGradientFrom: '#e96d9e',
    backgroundGradientTo: '#ffaa8f',
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    strokeWidth: 2,
  };

  const data = {
    labels: dataSet.labels,
    datasets: [{
      data: dataSet.total,
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      strokeWidth: 2,
    }],
  };
  return (
    <View>
      <LineChart
        style={{ flex: 1 }}
        fromZero
        data={data}
        height={220}
        width={screenWidth}
        chartConfig={chartConfig}
        bezier
      />
    </View>
  );
}

LineGraph.propTypes = {
  dataSet: PropTypes.shape({ labels: PropTypes.array, total: PropTypes.array }),
};

LineGraph.defaultProps = {
  dataSet: {},
};
