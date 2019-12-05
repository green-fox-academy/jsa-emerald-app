import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import TabBarIcon from './TabBarIcon';
import Stats from '../Stats/index';
import TransCreator from '../TransCreator/index';
import Personal from '../Personal/index';
import themeColor from '../Common/Color';

const AppNavigator = createBottomTabNavigator({
  Stats,
  Create: TransCreator,
  Me: Personal,
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    // eslint-disable-next-line react/prop-types
    tabBarIcon: ({ focused, tintColor }) => (
      <TabBarIcon
        navigation={navigation}
        focused={focused}
        tintColor={tintColor}
      />
    ),

  }),
  tabBarOptions: themeColor,
});

export default AppNavigator;
