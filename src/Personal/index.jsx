import React from 'react';
import { View } from 'react-native';
import Register from './register';
import styles from '../Common/RegisterPage';

export default function Personal() {
  return (
    <View style={styles.container}>
      <Register />
    </View>
  );
}
