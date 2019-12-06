import React from 'react';
import { registerRootComponent } from 'expo';
import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import AppNavigator from './Navigator';
import store from './redux/store';

const AppContainer = createAppContainer(AppNavigator);

const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

registerRootComponent(App);
