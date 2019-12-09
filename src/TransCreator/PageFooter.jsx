import React from 'react';
import moment from 'moment';
import {
  Text,
  Button,
  Footer,
  FooterTab,
  Toast,
} from 'native-base';
import { Platform } from 'react-native';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Style';
import { addNewTransaction } from '../Stats/actionCreator';

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

const PageFooter = ({ transAmount, transType, transDate }) => {
  const dispatch = useDispatch();
  return (
    <Footer style={Platform.OS === 'ios' ? styles.footerIOS : styles.footerAndroid}>
      <FooterTab style={styles.footerAndroid}>
        <Button />
        <Button
          bordered
          style={styles.confirmButton}
          onPress={() => pressHandler(transAmount, transDate, transType, dispatch)}
        >
          <Text style={styles.confirmButtonText}>Add</Text>
        </Button>
        <Button />
      </FooterTab>
    </Footer>
  );
};


PageFooter.propTypes = {
  transAmount: PropTypes.string,
  transType: PropTypes.string,
  transDate: PropTypes.number,
};

PageFooter.defaultProps = {
  transAmount: null,
  transType: 'Expense',
  transDate: moment().unix(),
};

export default PageFooter;
