import React, { useState, useEffect } from 'react';
import {
  View, Text, KeyboardAvoidingView, Platform, ActivityIndicator,
} from 'react-native';
import { Input, Icon } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from 'react-navigation-hooks';
import MainHeader from '../Common/MainHeader';
import utils from './utils';
import { requestSignup } from './actionCreator';
import SubmitBtn from './SubmitBtn';
import RegisterStyle from './registerStyle';

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
    if (user.accessToken) navigate('PersonalIndex');
    if (user.message !== '' && user.message !== undefined) {
      setErrorMsgDisplay(true);
    }
  }, [user.accessToken, user.message]);

  return (
    <>
      <View style={{ borderBottomWidth: 2, borderBottomColor: '#f8f8f8' }}>
        <MainHeader title="Register" />
      </View>
      <KeyboardAvoidingView
        style={RegisterStyle.registerForm}
        behavior="padding"
        keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 20}
        enabled
      >
        <View>
          <View style={RegisterStyle.inputSection}>
            <Input
              placeholder="username"
              leftIcon={(
                <Icon
                  name="face"
                  color="#a8a8a8"
                />
          )}
              leftIconContainerStyle={RegisterStyle.inputIcon}
              label="Your Username"
              value={username}
              onChangeText={(value) => setUsername(value)}
              labelStyle={{ color: 'gray' }}
            />
          </View>
          <View style={RegisterStyle.inputSection}>
            <Input
              placeholder="email@address.com"
              leftIcon={(
                <Icon
                  name="email"
                  color="#a8a8a8"
                />
          )}
              leftIconContainerStyle={RegisterStyle.inputIcon}
              label="Your Email Address"
              textContentType="emailAddress"
              value={email}
              onChangeText={(value) => setEmail(value)}
              labelStyle={{ color: 'gray' }}
            />
            <Text style={RegisterStyle.note}>
              {utils.validateEmail(email) || email === '' ? '' : 'Your email is not correct.' }
            </Text>
          </View>

          <View style={RegisterStyle.inputSection}>
            <Input
              placeholder="Password"
              leftIcon={(
                <Icon
                  name="lock"
                  color="#a8a8a8"
                />
              )}
              leftIconContainerStyle={RegisterStyle.inputIcon}
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
            <Text style={RegisterStyle.note}>
              {utils.validatePassword(password) || password === ''
                ? '' : 'Password should be at least 8 characters.'}
            </Text>
          </View>

          <View style={RegisterStyle.inputSection}>
            <Input
              placeholder="Confirm your password"
              leftIcon={(
                <Icon
                  name="lock"
                  color="#a8a8a8"
                />
              )}
              leftIconContainerStyle={RegisterStyle.inputIcon}
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
            <Text style={RegisterStyle.note}>
              {password === confirmPassword || confirmPassword === '' ? '' : 'Password is not the same.'}
            </Text>
          </View>
          {
             (errorMsgDisplay) ? (
               <View style={[RegisterStyle.inputSection, RegisterStyle.errorBox]}>
                 <Text style={RegisterStyle.errorText}>{user.message}</Text>
               </View>
             ) : (null)
          }
          <View>
            {(user.isInProgress) ? <ActivityIndicator size="large" color="black" />
              : (
                <SubmitBtn
                  disabled={utils.validateSignup(username,
                    password,
                    confirmPassword,
                    email) === false}
                  onPressBtn={() => signUp({ email, password, username })}
                />
              )}
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
}
