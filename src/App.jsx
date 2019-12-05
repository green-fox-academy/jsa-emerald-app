import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { registerRootComponent } from 'expo';
import { Provider } from 'react-redux';

import { createAppContainer } from 'react-navigation';
import AppNavigator from './BottomNavBar';
import store from './redux/store';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const AppContainer = createAppContainer(AppNavigator);

const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

registerRootComponent(App);
