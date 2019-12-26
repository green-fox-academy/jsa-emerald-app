import React from 'react';
import { View, Button } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import styles from './loginView';

export default function Index() {
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <Button title="Login" onPress={() => navigate('Login')} />
    </View>
  );
}
