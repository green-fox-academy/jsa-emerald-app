import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { registerRootComponent } from 'expo';
import { Provider } from 'react-redux';

import store from './redux/store';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const App = () => (
  <Provider store={store}>
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  </Provider>
);

registerRootComponent(App);
