import React from 'react';
import { View, Button } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import { useSelector } from 'react-redux';
import RegisterStyle from './registerStyle';
import Personal from './Personal';

export default function PersonalIndex() {
  const { navigate } = useNavigation();
  const user = useSelector((state) => state.user);

  return (
    (user.accessToken !== '' && user.accessToken !== undefined)
      ? <Personal /> : (
        <View style={RegisterStyle.container}>
          <Button title="Sign up" onPress={() => navigate('Register')} />
          <Button title="Login" onPress={() => navigate('Login')} />
        </View>
      )
  );
}
