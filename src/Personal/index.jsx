import React from 'react';
import { View, Button } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import { useSelector } from 'react-redux';
import RegisterView from './RegisterView';
import Personal from './Personal';

export default function Index() {
  const { navigate } = useNavigation();
  const user = useSelector((state) => state.user);

  return (
    (user.accessToken !== '' && user.accessToken !== undefined) ? <Personal /> : (
      <View style={RegisterView.container}>
        <Button title="Sign up" onPress={() => navigate('Register')} />
      </View>
    )
  );
}
