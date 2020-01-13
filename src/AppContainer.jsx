import React from 'react';
import { useSelector } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import AppNavigatorWhite from './Navigator/indexWhite';
import AppNavigatorBlack from './Navigator/indexBlack';
import AppNavigatorWhiteProfile from './Navigator/indexWhiteProfile';
import AppNavigatorBlackProfile from './Navigator/indexBlackProfile';

let assigned = false;
export default () => {
  const { themeMode } = useSelector((state) => state.theme);
  let AppContainer;
  if (assigned) {
    AppContainer = themeMode === 'Light' ? createAppContainer(AppNavigatorWhiteProfile) : createAppContainer(AppNavigatorBlackProfile);
  } else {
    AppContainer = themeMode === 'Light' ? createAppContainer(AppNavigatorWhite) : createAppContainer(AppNavigatorBlack);
  }
  assigned = true;
  return <AppContainer />;
};
