import React from 'react';
import { View, Button } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import { useSelector } from 'react-redux';
import styles from './loginStyle';
import Personal from './Personal';

export default function PersonalIndex() {
  const { navigate } = useNavigation();
  const user = useSelector((state) => state.user);

  return (
    (user.accessToken !== '' && user.accessToken !== undefined)
      ? <Personal /> : (
        <View style={styles.container}>
          <Button title="Login" onPress={() => navigate('Login')} />
        </View>
      )
  );
}
