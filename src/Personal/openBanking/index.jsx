import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import { loadBankList } from './actionCreator';

export default () => {
  const dispatch = useDispatch();
  const openBanking = useSelector((state) => state.openBanking);
  useEffect(() => {
    dispatch(loadBankList());
  }, []);
  return (
    <View>
      <Text style={{ fontSize: 200 }}>{openBanking.bankList.length}</Text>
    </View>
  );
};
