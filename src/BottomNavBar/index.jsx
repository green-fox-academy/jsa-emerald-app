import { createBottomTabNavigator } from 'react-navigation-tabs';
import getTabBarIcon from './getTabBarIcon';
import Stats from '../Stats/index';
import TransCreator from '../TransCreator/index';
import Personal from '../Personal/index';
import themeColor from '../Common/Color';

const AppNavigator = createBottomTabNavigator({
  Stats: { screen: Stats },
  Create: { screen: TransCreator },
  Me: { screen: Personal },
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => getTabBarIcon(navigation, focused, tintColor),
  }),
  tabBarOptions: themeColor,
});

export default AppNavigator;
