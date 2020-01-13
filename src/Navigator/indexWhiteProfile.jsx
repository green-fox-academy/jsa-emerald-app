import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import TabBarIcon from './TabBarIcon';
import Trans from '../Stats/index';
import Chart from '../Chart/index';
import TransCreator from '../TransCreator/index';
import FamilyTrans from '../FamilyTrans/index';
import PersonalNavigation from '../Personal/personalStackNavigation';

const AppNavigator = createBottomTabNavigator({
  Trans,
  Chart,
  Create: TransCreator,
  Family: FamilyTrans,
  Me: PersonalNavigation,
},
{
  initialRouteName: 'Me', // set default page
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
  tabBarOptions: {
    activeTintColor: '#5C6BC0',
    inactiveTintColor: 'gray',
    style: {
      backgroundColor: 'white',
    },
  },
});

export default AppNavigator;
