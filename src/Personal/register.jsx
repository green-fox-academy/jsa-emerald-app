import React, { useState, useEffect, useSelector } from 'react';
import {
  View, Text, TextInput, Button,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from 'react-navigation-hooks';
import utils from './utils';
import RegisterView from './RegisterView';
import { requestSignup } from './actionCreator';

export default function Register() {
  const { navigate } = useNavigation();
  const { accessToken } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const signUp = (userInfo) => {
    dispatch(requestSignup(userInfo.email, userInfo.password, userInfo.username));
  };

  useEffect(() => {
    if (accessToken) navigate('Index');
  }, [accessToken]);

  return (
    <View style={RegisterView.registerForm}>
      <Text styles={RegisterView.header}>Registration</Text>
      <TextInput
        style={RegisterView.inputText}
        placeholder="Your username"
        underlineColorAndroid="transparent"
        value={username}
        onChangeText={(value) => setUsername(value)}
      />
      <TextInput
        style={RegisterView.inputText}
        placeholder="Your email"
        underlineColorAndroid="transparent"
        textContentType="emailAddress"
        value={email}
        onChangeText={(value) => setEmail(value)}
      />
      <Text style={RegisterView.note}>
        {email === 'test@gmail.com' ? 'The email is registered.' : '' }
        {utils.emailValidation(email) || email === '' ? '' : 'Your email is not correct.' }
      </Text>
      <TextInput
        style={RegisterView.inputText}
        placeholder="Your password"
        underlineColorAndroid="transparent"
        secureTextEntry
        value={password}
        onChangeText={(value) => setPassword(value)}
      />
      <Text style={RegisterView.note}>
        {utils.passwordValidation(password) || password === '' ? '' : 'Password should be 8 to 16 characters with at least one special character.'}
      </Text>
      <TextInput
        style={RegisterView.inputText}
        placeholder="Confirm your password"
        underlineColorAndroid="transparent"
        secureTextEntry
        value={confirmPassword}
        onChangeText={(value) => setConfirmPassword(value)}
      />
      <Text style={RegisterView.note}>
        {password === confirmPassword || confirmPassword === '' ? '' : 'Password is not the same.'}
      </Text>
      {
        utils.validateSignup(username, password, confirmPassword, email) ? (
          <Button
            title="Sign Up"
            color="green"
            onPress={() => signUp({ email, password, username })}
          />
        ) : (
          <Button
            title="Sign Up"
            disabled
          />
        )
      }

    </View>
  );
}
