import React, { useEffect } from 'react';
import { registerRootComponent } from 'expo';
import * as Font from 'expo-font';
import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import AppNavigator from './Navigator';
import store from './redux/store';

const AppContainer = createAppContainer(AppNavigator);


export default class App extends React.Component {
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('../assets/Fonts/Roboto/Roboto-Regular.ttf'),
      Roboto_medium: require('../assets/Fonts/Roboto/Roboto-Medium.ttf'),
    });
  }

  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

registerRootComponent(App);
