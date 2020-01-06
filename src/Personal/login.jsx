import React, { useState, useEffect } from 'react';
import {
  View, Text, TextInput, Button,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from 'react-navigation-hooks';
import MainHeader from '../Common/MainHeader';
import utils from './utils';
import LoginView from './loginView';
import { requestLogin } from './actionCreator';

export default function Login() {
  const { navigate } = useNavigation();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = (userInfo) => {
    dispatch(requestLogin(userInfo));
  };

  useEffect(() => {
    if (user.accessToken) navigate('Index');
  }, [user.accessToken]);

  return (
    <>
      <MainHeader title="Login" />
      <View style={LoginView.registerForm}>
        <TextInput
          style={LoginView.inputText}
          placeholder="Your email"
          underlineColorAndroid="transparent"
          textContentType="emailAddress"
          value={email}
          onChangeText={(value) => setEmail(value)}
        />
        <Text style={LoginView.Note}>
          {utils.emailValidation(email) || email === '' ? '' : 'Your email is not correct.' }
        </Text>
        <TextInput
          style={LoginView.inputText}
          placeholder="Your password"
          underlineColorAndroid="transparent"
          secureTextEntry
          value={password}
          onChangeText={(value) => setPassword(value)}
        />
        <Text style={LoginView.Note}>
          {utils.passwordValidation(password) || password === '' ? '' : 'Password should be at least 8 characters.'}
        </Text>
        {
      utils.loginValidation(email, password) ? (
        <Button
          title="Sign Up"
          color="green"
          onPress={() => login({ email, password })}
        />
      ) : (
        <Button
          title="Sign Up"
          disabled
        />
      )
      }
      </View>
    </>
  );
}
