import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View } from 'react-native';
import { Button, Image } from 'react-native-elements';
import ModalDropdown from 'react-native-modal-dropdown';
import { LinearGradient } from 'expo-linear-gradient';
import PropTypes from 'prop-types';
import { NavigationScreenPropType } from 'react-navigation';
import { loadBankList } from './actionCreator';
import colors from '../../Common/Color';

const opBank = require('../../../assets/openBankingHead.png');

const OpenBanking = ({ navigation }) => {
  const dispatch = useDispatch();
  const openBanking = useSelector((state) => state.openBanking);
  useEffect(() => {
    dispatch(loadBankList());
  }, []);

  const goAuth = (idx, val) => {
    const { id } = openBanking.bankList
      .filter((item) => item.attributes.full_name === val)[0];

    fetch(`https://oauth-sandbox.fintecture.com/ais/v1/provider/${id}/authorize?response_type=code&redirect_uri=http://122.51.72.108:8080`, {
      headers: {
        app_id: 'e9ac45bb-dd82-45a0-a092-c5a1bf398581',
        Accept: 'application/json',
      },
    }).then((response) => response.json())
      .then((response) => {
        navigation.navigate({ routeName: 'WebView', params: { url: response.url } });
        setTimeout(() => { navigation.navigate('OpenBanking'); }, 5000);
      });
  };
  return (
    <View>
      <View style={{ alignItems: 'center', paddingTop: 100 }}>
        <Image source={opBank} style={{ width: 350, height: 350 }} />
      </View>
      <View style={{ alignItems: 'center', paddingTop: 100 }}>
        <ModalDropdown
          style={{
            borderWidth: 1, borderColor: '#410093', padding: 10, borderRadius: 5, width: 205,
          }}
          textStyle={{ fontSize: 15 }}
          dropdownTextStyle={{ fontSize: 13 }}
          dropdownStyle={{ width: 190 }}
          defaultValue="Select your bank..."
          options={openBanking.bankList.map((item) => item.attributes.full_name)}
          onSelect={goAuth}
        />

        <LinearGradient
          colors={colors.gradientColor.green}
          start={[0.1, 0.9]}
          end={[0.9, 0.1]}
          style={{
            borderRadius: 24, paddingTop: 3, paddingBottom: 3, width: 240, marginTop: 50,
          }}
        >
          <Button title="Authorize" type="clear" titleStyle={{ color: 'white' }} onPress={() => {}} />
        </LinearGradient>
      </View>
    </View>
  );
};

OpenBanking.propTypes = {
  navigation: PropTypes.shape(NavigationScreenPropType),
};

OpenBanking.defaultProps = {
  navigation: {},
};

export default OpenBanking;
