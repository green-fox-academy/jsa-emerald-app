import React from 'react';
import { View, Dimensions } from 'react-native';
import { Button, Image } from 'react-native-elements';
import { useNavigation } from 'react-navigation-hooks';
import { useSelector } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';
import RegisterView from './registerView';
import Personal from './Personal';
import colors from '../Common/Color';

const img = require('../../assets/personalDefaultPage.png');

export default function Index() {
  const { navigate } = useNavigation();
  const user = useSelector((state) => state.user);
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  return (
    (user.accessToken !== '' && user.accessToken !== undefined) ? <Personal /> : (
      <>
        <View style={{ flex: 1, paddingTop: 120 }}>
          <Image
            source={img}
            style={{ marginTop: 50, width: screenWidth, height: screenHeight / 3 }}
          />
        </View>
        <View style={RegisterView.container}>
          <View>
            <LinearGradient
              colors={colors.gradientColor.green}
              start={[0.1, 0.9]}
              end={[0.9, 0.1]}
              style={{
                borderRadius: 30, paddingTop: 10, paddingBottom: 10, width: 140,
              }}
            >
              <Button title="Login" type="clear" titleStyle={{ color: 'white' }} onPress={() => navigate('Login')} />
            </LinearGradient>
          </View>
          <View>
            <LinearGradient
              colors={colors.gradientColor.white}
              start={[0.1, 0.9]}
              end={[0.9, 0.1]}
              style={{
                borderRadius: 30, paddingTop: 9, paddingBottom: 9, width: 140, borderColor: '#f6f6f6', borderWidth: 2,
              }}
            >
              <Button
                title="Sign up"
                type="clear"
                titleStyle={{
                  color: 'gray',
                }}
                onPress={() => navigate('Register')}
              />
            </LinearGradient>
          </View>
        </View>
      </>
    )
  );
}
