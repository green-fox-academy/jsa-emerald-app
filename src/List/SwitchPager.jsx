import { View, Text } from 'react-native';
import React from 'react';
import ViewPager from '@react-native-community/viewpager';
import TransList from './TransList';

export default function SwitchPager() {
  return (
    <ViewPager style={{ flex: 1 }} initialPage={0}>
      <View key="1">
        <Text>First Page</Text>
      </View>
      <View key="2">
        <Text>Seconde Page</Text>
      </View>
    </ViewPager>
  );
}
