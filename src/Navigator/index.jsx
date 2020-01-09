import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import TabBarIcon from './TabBarIcon';
import Trans from '../Stats/index';
import Chart from '../Chart/index';
import TransCreator from '../TransCreator/index';
import Personal from '../Personal/Personal';
import themeColor from '../Common/Color';

const AppNavigator = createBottomTabNavigator({
  Trans,
  Chart,
  Create: TransCreator,
  Me: Personal,
},
{
  initialRouteName: 'Create', // set default page
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
  tabBarOptions: themeColor.navColor,
});

export default AppNavigator;
