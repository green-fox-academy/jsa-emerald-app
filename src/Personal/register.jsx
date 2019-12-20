import React, { useState } from 'react';
import {
  View, Text, TextInput, Button,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from 'react-navigation-hooks';
import utils from './utils';
import styles from '../Common/RegisterPage';
import { requestSignup } from './actionCreator';

export default function Register() {
  const { navigate } = useNavigation();

  const [username, setUsername] = useState('user1');
  const [email, setEmail] = useState('1@1.com');
  const [password, setPassword] = useState('11111111');
  const [confirmPassword, setConfirmPassword] = useState('11111111');

  const dispatch = useDispatch();

  const handlePasswordChange = (value) => {
    setPassword(value);
  };
  const handleConfirmPasswordChange = (value) => {
    setConfirmPassword(value);
  };
  const handleEmailChange = (value) => {
    setEmail(value);
  };
  const handleUsernameChange = (value) => {
    setUsername(value);
  };

  const signUp = (userInfo) => {
    dispatch(requestSignup(userInfo.email, userInfo.password, userInfo.username));
    navigate('Index');
  };

  return (
    <View style={styles.registerForm}>
      <Text styles={styles.header}>Registration</Text>

      <TextInput
        style={styles.inputText}
        placeholder="Your username"
        underlineColorAndroid="transparent"
        value={username}
        onChangeText={(value) => handleUsernameChange(value)}
      />

      <TextInput
        style={styles.inputText}
        placeholder="Your email"
        underlineColorAndroid="transparent"
        textContentType="emailAddress"
        value={email}
        onChangeText={(value) => handleEmailChange(value)}
      />
      <Text style={styles.Note}>
        {email === 'test@gmail.com' ? 'The email is registered.' : '' }
        {utils.emailValidation(email) || email === '' ? '' : 'Your email is not correct.' }
      </Text>

      <TextInput
        style={styles.inputText}
        placeholder="Your password"
        underlineColorAndroid="transparent"
        secureTextEntry
        value={password}
        onChangeText={(value) => handlePasswordChange(value)}
      />
      <Text style={styles.Note}>
        {utils.passwordValidation(password) || password === '' ? '' : 'Password should be 8 to 16 characters.'}
      </Text>

      <TextInput
        style={styles.inputText}
        placeholder="Confirm your password"
        underlineColorAndroid="transparent"
        secureTextEntry
        value={confirmPassword}
        onChangeText={(value) => handleConfirmPasswordChange(value)}
      />
      <Text style={styles.Note}>
        {password === confirmPassword || confirmPassword === '' ? '' : 'Password is not the same.'}
      </Text>

      {
      username !== ''
      && password !== ''
      && email !== ''
      && email !== 'test@gmail.com'
      && password === confirmPassword
      && utils.emailValidation(email)
      && utils.passwordValidation(password)
        ? (
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
