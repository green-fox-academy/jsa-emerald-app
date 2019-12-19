import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Personal from './personalPage';
import Register from './register';

const MainNavigator = createStackNavigator({
  Home: { screen: Personal },
  Register: { screen: Register },
});

const personalNavigator = createAppContainer(MainNavigator);

export default personalNavigator;
