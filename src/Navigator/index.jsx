import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import TabBarIcon from './TabBarIcon';
import Stats from '../Stats/index';
import TransCreator from '../TransCreator/index';
import PersonalNavigation from '../Personal/personalStackNavigation';
import themeColor from '../Common/Color';
// import personalNavigator from '../Personal/personalStackNavigation';

const AppNavigator = createBottomTabNavigator({
  Stats,
  Create: TransCreator,
  Me: PersonalNavigation,
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
