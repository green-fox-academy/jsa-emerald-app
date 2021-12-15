import React, { useState, useEffect } from 'react';
import {
  View, Text, KeyboardAvoidingView, Platform, ActivityIndicator,
} from 'react-native';
import { Input, Icon } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from 'react-navigation-hooks';
import MainHeader from '../Common/MainHeader';
import utils from './utils';
import LoginStyle from './loginStyle';
import { requestLogin } from './actionCreator';
import SubmitBtn from './SubmitBtn';

export default function Login() {
  const { navigate } = useNavigation();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordHidden, setPasswordHidden] = useState(true);
  const [errorMsgDisplay, setErrorMsgDisplay] = useState(false);

  const login = (userInfo) => {
    dispatch(requestLogin(userInfo));
  };

  useEffect(() => {
    if (user.accessToken) navigate('PersonalIndex');
    if (user.message !== '' && user.message !== undefined) {
      setErrorMsgDisplay(true);
    }
  }, [user.accessToken, user.message]);

  useEffect(() => {
    setErrorMsgDisplay(false);
  }, []);

  return (
    <>
      <View style={{ borderBottomWidth: 2, borderBottomColor: '#f8f8f8' }}>
        <MainHeader title="Login" />
      </View>
      <KeyboardAvoidingView
        style={LoginStyle.registerForm}
        behavior="padding"
        keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 20}
        enabled
      >
        <View>
          <View style={LoginStyle.inputSection}>
            <Input
              placeholder="email@address.com"
              leftIcon={(
                <Icon
                  name="email"
                  color="#a8a8a8"
                />
          )}
              leftIconContainerStyle={LoginStyle.inputIcon}
              label="Your Email Address"
              textContentType="emailAddress"
              value={email}
              autoCapitalize="none"
              onChangeText={(value) => setEmail(value)}
              labelStyle={{ color: 'gray' }}
            />
            <Text style={LoginStyle.note}>
              {utils.validateEmail(email) || email === '' ? '' : 'Your email is not correct.' }
            </Text>
          </View>
          <View style={LoginStyle.inputSection}>
            <Input
              placeholder="Password"
              leftIcon={(
                <Icon
                  name="lock"
                  color="#a8a8a8"
                />
              )}
              leftIconContainerStyle={LoginStyle.inputIcon}
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
          </View>
          {
             (errorMsgDisplay) ? (
               <View style={[LoginStyle.inputSection, LoginStyle.errorBox]}>
                 <Text style={LoginStyle.errorText}>{user.message}</Text>
               </View>
             ) : (null)
          }
        </View>
        <View>
          {(user.isInProgress)
            ? <ActivityIndicator size="large" color="black" />
            : (
              <SubmitBtn
                disabled={utils.validateLogin(email, password) === false}
                onPressBtn={() => login({ email, password })}
              />
            )}
        </View>
      </KeyboardAvoidingView>
    </>
  );
}
