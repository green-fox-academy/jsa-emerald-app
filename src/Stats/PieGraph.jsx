import React from 'react';
import { View } from 'react-native';
import { VictoryPie, VictoryLabel } from 'victory-native';
import { Svg } from 'react-native-svg';

export default function PieGraph({ dataSet }) {
  const graphicData = dataSet.dataSet;
  const graphicColor = dataSet.colorSet;


  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Svg viewBox="0 0 300 300">
        <VictoryPie
          animate={{ easing: 'exp' }}
          data={graphicData}
          width={300}
          height={300}
          colorScale={graphicColor}
          innerRadius={40}
        />
        <VictoryLabel
          textAnchor="middle"
          verticalAnchor="middle"
          style={{ fontSize: 20 }}
          x={150}
          y={150}
          text="Pie!"
        />
      </Svg>
    </View>
  );
}
