import React, { useState, useEffect } from 'react';
import {
  View, Text, Dimensions, KeyboardAvoidingView, ImageBackground, Image,
} from 'react-native';
import { Input, Icon } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from 'react-navigation-hooks';
import { requestRestore, requestLogin } from './actionCreator';
import utils from './utils';
import LoginView from './loginView';
import SubmitBtn from './SubmitBtn';

const icon = require('../../assets/loginIcon.png');
const bgImg = require('../../assets/loginBg.png');

export default function Login() {
  const { navigate } = useNavigation();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordHidden, setPasswordHidden] = useState(true);
  const [errorMsgDisplay, setErrorMsgDisplay] = useState(false);

  const login = (userInfo) => {
    dispatch(requestLogin(userInfo));
  };

  useEffect(() => {
    if (user.accessToken) navigate('Index');
    // dispatch(requestRestore());
  }, [user.accessToken]);

  useEffect(() => {
    if (user.status !== '' && user.status !== undefined) {
      setErrorMsgDisplay(true);
    }
  }, [user.status]);

  return (
    <ImageBackground source={bgImg} style={{ width: screenWidth, height: screenHeight }}>
      <KeyboardAvoidingView
        style={LoginView.registerForm}
        behavior="padding"
        enabled
      >
        <View style={LoginView.icon}>
          <Image source={icon} style={{ width: 80, height: 80 }} />
        </View>
        <View style={LoginView.inputSection}>
          <Input
            placeholder="example@email.com"
            leftIcon={(
              <Icon
                name="email"
                color="#a8a8a8"
              />
            )}
            leftIconContainerStyle={LoginView.inputIcon}
            label="Email Address"
            textContentType="emailAddress"
            value={email}
            onChangeText={(value) => setEmail(value)}
            labelStyle={{ color: 'gray' }}
          />
          <Text style={LoginView.note}>
            {utils.emailValidation(email) || email === '' ? '' : 'Your email is not correct.'}
          </Text>
        </View>
        <View style={LoginView.inputSection}>
          <Input
            placeholder="Password"
            leftIcon={(
              <Icon
                name="lock"
                color="#a8a8a8"
              />
            )}
            leftIconContainerStyle={LoginView.inputIcon}
            label="Password"
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
            <View style={[LoginView.inputSection, LoginView.errorBox]}>
              <Text style={LoginView.errorText}>{user.message}</Text>
            </View>
          ) : (null)
        }
        <View style={{ paddingTop: 20 }}>
          <SubmitBtn
            disabled={utils.loginValidation(email, password) === false}
            onPressBtn={() => login({ email, password })}
            title="Login"
          />
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}
