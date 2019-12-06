import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';
import {
  Text,
  DatePicker,
} from 'native-base';
import { View } from 'react-native';
import moment from 'moment';
import styles from './Style';
import { setNewTransactionDate } from '../Stats/actionCreator';

export default () => {
  const { newTransDate } = useSelector((state) => state.transactions);
  const dispatch = useDispatch();

  return (
    <>
      <MaterialIcons name="date-range" style={styles.dateItemIcon} />
      <Text>Date: </Text>
      <View style={styles.dateView}>
        <DatePicker
          defaultDate={new Date()}
          minimumDate={new Date(1990, 1, 1)}
          maximumDate={new Date(2050, 12, 31)}
          locale="en"
          modalTransparent={false}
          animationType="fade"
          androidMode="default"
          placeHolderText={newTransDate}
          textStyle={{ color: '#5C6BC0' }}
          placeHolderTextStyle={{ color: '#5C6BC0' }}
          onDateChange={(newDate) => dispatch(setNewTransactionDate(moment(newDate).format('DD/MM/YYYY')))}
          disabled={false}
        />
      </View>
    </>
  );
};
