import React from 'react';
import { View } from 'react-native';
import Login from './Login';
import styles from './LoginView';

export default function Personal() {
  return (
    <View style={styles.container}>
      <Login />
    </View>
  );
}
