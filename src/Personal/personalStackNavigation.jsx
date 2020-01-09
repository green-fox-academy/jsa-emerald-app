import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Index from './index';
import Register from './register';
import Login from './login';

const MainNavigator = createStackNavigator({
  Index: {
    screen: Index,
    navigationOptions: {
      header: null,
    },
  },
  Register: {
    screen: Register,
    navigationOptions: {
      header: null,
    },
  },
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
    },
  },
});

const personalNavigator = createAppContainer(MainNavigator);

export default personalNavigator;
