import React from 'react';
import { View, Button } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import styles from '../Common/RegisterPage';

export default function Personal() {
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <Button title="Sign up" onPress={() => navigate('Register')} />
    </View>
  );
}
