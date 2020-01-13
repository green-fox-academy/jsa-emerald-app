import { createStackNavigator } from 'react-navigation-stack';
import PersonalIndex from './PersonalIndex';
import Login from './Login';

const MainNavigator = createStackNavigator({
  PersonalIndex: {
    screen: PersonalIndex,
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

export default MainNavigator;
