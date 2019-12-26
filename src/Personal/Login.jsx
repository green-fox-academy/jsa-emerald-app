import React, { useState } from 'react';
import {
  View, Text, TextInput, Button,
} from 'react-native';
import utils from './utils';
import LoginView from './loginView';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={LoginView.registerForm}>
      <Text styles={LoginView.header}>Login</Text>

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
        {utils.passwordValidation(password) || password === '' ? '' : 'Password should be 8 to 16 characters with at least one special characters.'}
      </Text>

      {
      utils.loginValidation(email, password) ? (
        <Button
          title="Sign Up"
          color="green"
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
