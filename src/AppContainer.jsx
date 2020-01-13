import React from 'react';
import { useSelector } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import AppNavigatorWhite from './Navigator/indexWhite';
import AppNavigatorBlack from './Navigator/indexBlack';

export default () => {
  const { themeMode } = useSelector((state) => state.theme);
  const AppContainer = themeMode === 'Light' ? createAppContainer(AppNavigatorWhite) : createAppContainer(AppNavigatorBlack);
  return <AppContainer />;
};
