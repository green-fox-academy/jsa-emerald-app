import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { loadTransaction } from './actionCreator';
import { loadTransactionList } from '../PersistStorage';

export default function Stats() {
  const dispatch = useDispatch();

  useEffect(() => {
    loadTransactionList((data) => dispatch(loadTransaction(data)));
  }, []);

  return (
    <View>
      <Text>Stats Screen</Text>
    </View>
  );
}
