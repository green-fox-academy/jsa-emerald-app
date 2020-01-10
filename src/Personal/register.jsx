import React, { useState, useEffect } from 'react';
import {
  View, Text, KeyboardAvoidingView, Platform,
} from 'react-native';
import { Input, Icon } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from 'react-navigation-hooks';
import MainHeader from '../Common/MainHeader';
import utils from './utils';
import RegisterView from './RegisterView';
import { requestSignup } from './actionCreator';
import SubmitBtn from './SubmitBtn';

export default function Register() {
  const { navigate } = useNavigation();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordHidden, setPasswordHidden] = useState(true);
  const [confirmPasswordHidden, setConfirmPasswordHidden] = useState(true);
  const [errorMsgDisplay, setErrorMsgDisplay] = useState(false);

  const signUp = (userInfo) => {
    dispatch(requestSignup(userInfo));
  };

  useEffect(() => {
    if (user.accessToken) navigate('Index');
  }, [user.accessToken]);

  useEffect(() => {
    if (user.status !== '' && user.status !== undefined) {
      setErrorMsgDisplay(true);
    }
  }, [user.status]);

  return (
    <>
      <View style={{ borderBottomWidth: 2, borderBottomColor: '#f8f8f8' }}>
        <MainHeader title="Register" />
      </View>
      <KeyboardAvoidingView
        style={RegisterView.registerForm}
        behavior="padding"
        keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 20}
        enabled
      >
        <View>
          <View style={RegisterView.inputSection}>
            <Input
              placeholder="username"
              leftIcon={(
                <Icon
                  name="face"
                  color="#a8a8a8"
                />
          )}
              leftIconContainerStyle={RegisterView.inputIcon}
              label="Your Username"
              value={username}
              onChangeText={(value) => setUsername(value)}
              labelStyle={{ color: 'gray' }}
            />
          </View>
          <View style={RegisterView.inputSection}>
            <Input
              placeholder="email@address.com"
              leftIcon={(
                <Icon
                  name="email"
                  color="#a8a8a8"
                />
          )}
              leftIconContainerStyle={RegisterView.inputIcon}
              label="Your Email Address"
              textContentType="emailAddress"
              value={email}
              onChangeText={(value) => setEmail(value)}
              labelStyle={{ color: 'gray' }}
            />
            <Text style={RegisterView.note}>
              {utils.emailValidation(email) || email === '' ? '' : 'Your email is not correct.' }
            </Text>
          </View>

          <View style={RegisterView.inputSection}>
            <Input
              placeholder="Password"
              leftIcon={(
                <Icon
                  name="lock"
                  color="#a8a8a8"
                />
              )}
              leftIconContainerStyle={RegisterView.inputIcon}
              label="Your password"
              secureTextEntry={passwordHidden}
              value={password}
              onChangeText={(value) => setPassword(value)}
              labelStyle={{ color: 'gray' }}
              rightIcon={(
                <Icon
                  name={`md-eye${passwordHidden ? '-off' : ''}`}
                  type="ionicon"
                  color="gray"
                  onPress={() => setPasswordHidden(!passwordHidden)}
                />
            )}
            />
            <Text style={RegisterView.note}>
              {utils.passwordValidation(password) || password === ''
                ? '' : 'Password should be at least 8 characters.'}
            </Text>
          </View>

          <View style={RegisterView.inputSection}>
            <Input
              placeholder="Confirm your password"
              leftIcon={(
                <Icon
                  name="lock"
                  color="#a8a8a8"
                />
              )}
              leftIconContainerStyle={RegisterView.inputIcon}
              label="Confirm your password"
              secureTextEntry={confirmPasswordHidden}
              value={confirmPassword}
              onChangeText={(value) => setConfirmPassword(value)}
              labelStyle={{ color: 'gray' }}
              rightIcon={(
                <Icon
                  name={`md-eye${confirmPasswordHidden ? '-off' : ''}`}
                  type="ionicon"
                  color="gray"
                  onPress={() => setConfirmPasswordHidden(!confirmPasswordHidden)}
                />
            )}
            />
            <Text style={RegisterView.note}>
              {password === confirmPassword || confirmPassword === '' ? '' : 'Password is not the same.'}
            </Text>
          </View>
          {
             (errorMsgDisplay) ? (
               <View style={[RegisterView.inputSection, RegisterView.errorBox]}>
                 <Text style={RegisterView.errorText}>{user.message}</Text>
               </View>
             ) : (null)
          }
          <View>
            <SubmitBtn
              disabled={utils.validateSignup(username, password, confirmPassword, email) === false}
              onPressBtn={() => signUp({ email, password, username })}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
}
