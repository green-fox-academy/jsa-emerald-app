import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Index from './index';
import Register from './register';

const MainNavigator = createStackNavigator({
  Index,
  Register,
});

const personalNavigator = createAppContainer(MainNavigator);

export default personalNavigator;
