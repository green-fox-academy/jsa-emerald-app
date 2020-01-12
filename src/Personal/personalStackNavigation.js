import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Index from './index';
import Register from './Register';
import Login from './Login';
import FamilyPage from './familyGroup/index';
import OpenBanking from './openBanking/index';
import WebView from './openBanking/WebView';

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
  OpenBanking: {
    screen: OpenBanking,
    navigationOptions: {
      header: null,
    },
  },
  WebView: {
    screen: WebView,
    navigationOptions: {
      header: null,
    },
  },
  FamilyPage: {
    screen: FamilyPage,
    navigationOptions: {
      header: null,
    },
  },
});

const personalNavigator = createAppContainer(MainNavigator);

export default personalNavigator;
