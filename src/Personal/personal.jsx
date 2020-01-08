import React from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, Button } from 'react-native';
import { logoutSuccessful } from './actionCreator';

export default function Personal() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutSuccessful());
  };

  return (
    <View>
      <Button title="Logout" color="#f194ff" onPress={handleLogout} />
      <Text>
      This is Personal page
      </Text>
    </View>
  );
}
