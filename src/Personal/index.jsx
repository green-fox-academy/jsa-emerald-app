import React from 'react';
import { View, Button } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import { useSelector } from 'react-redux';
import styles from '../Common/RegisterPage';
import Personal from './personal';

export default function Index() {
  const { navigate } = useNavigation();
  const user = useSelector((state) => state.user);
  return (
    (user.accessToken !== null) ? <Personal /> : (
      <View style={styles.container}>
        <Button title="Sign up" onPress={() => navigate('Register')} />
      </View>
    )
  );
}
