import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View } from 'react-native';
import { Button, Image } from 'react-native-elements';
import ModalDropdown from 'react-native-modal-dropdown';
import { LinearGradient } from 'expo-linear-gradient';
import { loadBankList } from './actionCreator';
import colors from '../../Common/Color';

const opBank = require('../../../assets/openBankingHead.png');

export default () => {
  const dispatch = useDispatch();
  const openBanking = useSelector((state) => state.openBanking);
  useEffect(() => {
    dispatch(loadBankList());
  }, []);
  return (
    <View>
      <View style={{ alignItems: 'center', paddingTop: 100 }}>
        <Image source={opBank} style={{ width: 350, height: 350 }} />
      </View>
      <View style={{ alignItems: 'center', paddingTop: 100 }}>
        <ModalDropdown
          style={{
            borderWidth: 2, borderColor: '#f6f6f6', padding: 10, borderRadius: 5, width: 205,
          }}
          textStyle={{ fontSize: 15 }}
          dropdownTextStyle={{ fontSize: 13 }}
          dropdownStyle={{ width: 190 }}
          defaultValue="Select your bank..."
          options={openBanking.bankList.map((item) => item.attributes.full_name)}
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
