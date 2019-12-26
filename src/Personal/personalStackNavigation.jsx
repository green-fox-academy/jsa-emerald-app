import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Index from './index';
import Login from './login';

const MainNavigator = createStackNavigator({
  Index: { screen: Index },
  Login: { screen: Login },
});

const personalNavigator = createAppContainer(MainNavigator);

export default personalNavigator;
