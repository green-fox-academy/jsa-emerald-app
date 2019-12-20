import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Index from './index';
import Register from './register';

const MainNavigator = createStackNavigator({
  Index: { screen: Index },
  Register: { screen: Register },
});

const personalNavigator = createAppContainer(MainNavigator);

export default personalNavigator;
