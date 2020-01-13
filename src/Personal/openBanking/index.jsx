import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, ScrollView, Dimensions } from 'react-native';
import { Button, Image, ListItem } from 'react-native-elements';
import ModalDropdown from 'react-native-modal-dropdown';
import { LinearGradient } from 'expo-linear-gradient';
import PropTypes from 'prop-types';
import { NavigationScreenPropType } from 'react-navigation';
import GradientIcon from '../../Common/GradientIcon';
import utils from '../../Stats/utils';
import styles from '../../Common/themeStyleLight';
import {
  loadBankList, setBankIDCode, getAccessToken,
} from './actionCreator';
import colors from '../../Common/Color';

const opBank = require('../../../assets/openBankingHead.png');

const OpenBanking = ({ navigation }) => {
  const dispatch = useDispatch();
  const openBanking = useSelector((state) => state.openBanking);
  const [targetBank, setTargetBank] = useState('');
  let interval;

  useEffect(() => {
    if (openBanking.bankList.length === 0) {
      dispatch(loadBankList());
    }

    if (openBanking.accountCode && !openBanking.accessToken) {
      dispatch(getAccessToken(openBanking.accountCode, openBanking.accountID));
    }
  });

  const goAuth = (val) => {
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
      });

    interval = setInterval(() => {
      if (!openBanking.accountID) {
        fetch('http://122.51.72.108:8080', { method: 'post' })
          .then((response) => response.json())
          .then((response) => {
            clearInterval(interval);
            dispatch(setBankIDCode(response.id, response.code));
            navigation.navigate('OpenBanking');
          })
          .catch(() => {});
      }
    }, 2000);
  };

  if (openBanking.accountList && openBanking.accountList.length > 0) {
    return (
      <View style={{ alignItems: 'center' }}>
        <View style={{ alignItems: 'center', paddingTop: 100 }}>
          <Image source={opBank} style={{ width: 350, height: 350 }} />
        </View>
        <ScrollView style={{ flexDirection: 'column', height: 250, width: Dimensions.get('window').width * 0.9 }}>
          {openBanking.transactions.map((item, idx) => (
            <ListItem
              key={`InfoGroup:${idx + 1}`}
              leftElement={(
                <GradientIcon
                  name="creditcard"
                  color="#9e87fc"
                  iconFamily="antdesign"
                />
                    )}
              title={item.attributes.communication}
              titleStyle={styles.listHeading}
              subtitle={item.attributes.value_date}
              subtitleStyle={{ color: 'grey' }}
              rightTitle={utils.transType(item.attributes.amount, 'Expense')}
              rightTitleStyle={styles.listHeading}
              containerStyle={{ backgroundColor: 'rgba(255,0, 0, 0)' }}
            />
          ))}
        </ScrollView>
        <LinearGradient
          colors={colors.gradientColor.green}
          start={[0.1, 0.9]}
          end={[0.9, 0.1]}
          style={{
            borderRadius: 24, paddingTop: 3, paddingBottom: 3, width: 240, marginTop: 50,
          }}
        >
          <Button title="Add" type="clear" titleStyle={{ color: 'white' }} onPress={() => {}} />
        </LinearGradient>
      </View>

    );
  }
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
          enableEmptySections
          textStyle={{ fontSize: 15 }}
          dropdownTextStyle={{ fontSize: 13 }}
          dropdownStyle={{ width: 190 }}
          defaultValue="Select your bank..."
          options={openBanking.bankList.map((item) => item.attributes.full_name)}
          onSelect={(idx, val) => setTargetBank(val)}
        />

        <LinearGradient
          colors={colors.gradientColor.green}
          start={[0.1, 0.9]}
          end={[0.9, 0.1]}
          style={{
            borderRadius: 24, paddingTop: 3, paddingBottom: 3, width: 240, marginTop: 50,
          }}
        >
          <Button title="Authorize" type="clear" titleStyle={{ color: 'white' }} onPress={() => { goAuth(targetBank); }} />
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
