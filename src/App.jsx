import React, { useState, useEffect } from 'react';
import { registerRootComponent, AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import { Alert } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import AppNavigator from './Navigator';
import { store, persistor } from './reduxStore';
import Roboto from '../assets/Fonts/Roboto/Roboto-Regular.ttf';
import RobotoMedium from '../assets/Fonts/Roboto/Roboto-Medium.ttf';

const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  const [fontLoading, setFontLoading] = useState(true);

  useEffect(() => {
    async function loadFont() {
      try {
        await Font.loadAsync({
          Roboto,
          Roboto_medium: RobotoMedium,
        });
        setFontLoading(false);
      } catch (err) {
        Alert.alert(
          'Failed to load custom Font',
        );
      }
    }
    loadFont();
  }, []);

  return fontLoading ? <AppLoading />
    : (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppContainer />
        </PersistGate>
      </Provider>
    );
};

registerRootComponent(App);
