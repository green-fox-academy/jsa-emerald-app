import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import PersonalIndex from './PersonalIndex';
import Register from './Register';

const MainNavigator = createStackNavigator({
  PersonalIndex: {
    screen: PersonalIndex,
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
});

const PersonalNavigation = createAppContainer(MainNavigator);

export default PersonalNavigation;
