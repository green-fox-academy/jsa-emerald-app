import React from 'react';
import { View, Dimensions } from 'react-native';
// import { LineChart } from 'react-native-chart-kit';
import { VictoryChart, VictoryLine, VictoryTheme } from 'victory-native';

export default function LineGraph({ dataSet }) {
  console.log(dataSet);

  // const screenWidth = Dimensions.get('window').width * 0.85;

  // const chartConfig = {
  //   backgroundGradientFrom: '#e96d9e',
  //   backgroundGradientTo: '#ffaa8f',
  //   color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  //   strokeWidth: 2,
  // };

  // const data = {
  //   labels: dataSet.labels,
  //   datasets: [{
  //     data: dataSet.total,
  //     color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  //     strokeWidth: 2,
  //   }],
  // };
  return (
    <View>
      <VictoryChart>
        <VictoryLine
          interpolation="natural"
          style={{
            data: { stroke: 'black' },
            parent: { border: '1px solid #ccc' },
          }}
          data={dataSet}
        />
      </VictoryChart>
      {/* <LineChart
        style={{ flex: 1 }}
        fromZero
        data={data}
        height={220}
        width={screenWidth}
        chartConfig={chartConfig}
        bezier
      /> */}
    </View>
  );
}
