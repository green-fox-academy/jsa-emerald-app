import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
} from 'react-native';
import utils from './utils';
import styles from './LoginView';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlePasswordChange = (value) => {
    setPassword(value);
  };
  const handleEmailChange = (value) => {
    setEmail(value);
  };

  return (
    <View style={styles.registerForm}>
      <Text styles={styles.header}>Login</Text>

      <TextInput
        style={styles.inputText}
        placeholder="Your email"
        underlineColorAndroid="transparent"
        textContentType="emailAddress"
        value={email}
        onChangeText={(value) => handleEmailChange(value)}
      />
      <Text style={styles.Note}>
        {email === 'test@1.com' ? 'The email is registered.' : '' }
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
        {utils.passwordValidation(password) || password === '' ? '' : 'Password should be 8 to 16 characters with at least one special characters.'}
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          Sign up
        </Text>
      </TouchableOpacity>

    </View>
  );
}
