import React from 'react';
import {
  Text,
  Button,
  Footer,
  FooterTab,
  Toast,
} from 'native-base';
import { Platform } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Style';
import { addNewTransaction } from '../Stats/redux/actionCreator';

const pressHandler = (amount, date, view, dispatch) => {
  if (!amount) {
    Toast.show({
      position: 'top',
      textStyle: { color: '#F4511E' },
      text: 'Please enter the amount',
      buttonText: 'Okay',
    });
    return;
  }

  dispatch(addNewTransaction(view, date, amount));
};

export default () => {
  const dispatch = useDispatch();
  const { newTransType, newTransAmount, newTransDate } = useSelector((state) => state.transactions);
  return (
    <Footer style={Platform.OS === 'ios' ? styles.footerIOS : styles.footerAndroid}>
      <FooterTab style={styles.footerAndroid}>
        <Button />
        <Button
          bordered
          style={styles.confirmButton}
          onPress={() => pressHandler(newTransAmount, newTransDate, newTransType, dispatch)}
        >
          <Text style={styles.confirmButtonText}>Add</Text>
        </Button>
        <Button />
      </FooterTab>
    </Footer>
  );
};
