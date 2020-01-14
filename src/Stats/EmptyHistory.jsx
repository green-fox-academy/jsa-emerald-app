import React from 'react';
import { View } from 'react-native';
import { Image } from 'react-native-elements';
import { useSelector } from 'react-redux';
import setThemeStyle from '../Common/theme/setThemeStyle';

const img = require('../../assets/empty_box.png');

export default function EmptyHistory() {
  const { themeMode } = useSelector((state) => state.theme);
  const styles = setThemeStyle(themeMode);

  return (
    <View style={[styles.card, { alignItems: 'center', justifyContent: 'center', paddingVertical: 30 }]}>
      <Image
        source={img}
        style={{ width: 220, height: 220 }}
      />
    </View>
  );
}
