import React, { useEffect, useState } from 'react';
import {
  Container,
  Content,
  Item,
  Root,
} from 'native-base';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import { NavigationScreenPropType } from 'react-navigation';
import { Alert } from 'react-native';
import styles from './Style';
import PageHeader from './PageHeader';
import PageFooter from './PageFooter';
import AmountInput from './AmountInput';
import DateSelector from './DateSelector';
import { addNewTransaction } from '../Stats/actionCreator';

const TransCreator = ({ navigation }) => {
  const [transAmount, setTransAmount] = useState(null);
  const [transType, setTransType] = useState('Expense');
  const [transDate, setTransDate] = useState(moment().unix());
  const [newTransInsertionSuccess, setNewTransInsertionSuccess] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (newTransInsertionSuccess) {
      navigation.navigate('Stats');
      setNewTransInsertionSuccess(false);
    }
  });

  const createHandler = () => {
    if (!transAmount) {
      Alert.alert('Please enter the amount');
      return;
    }
    dispatch(addNewTransaction(transType, transDate, transAmount));
    setNewTransInsertionSuccess(true);
    setTransAmount(null);
    setTransType('Expense');
    setTransDate(moment().unix());
  };

  return (
    <Root>
      <Container>
        <PageHeader transType={transType} setTransType={setTransType} />
        <Content padder>
          <Item style={styles.amountInputOuter}>
            <AmountInput transAmount={transAmount} setTransAmount={setTransAmount} />
          </Item>
          <Item style={styles.dateItem}>
            <DateSelector transDate={transDate} setTransDate={setTransDate} />
          </Item>
        </Content>
        <PageFooter createHandler={createHandler} />
      </Container>
    </Root>
  );
};

TransCreator.propTypes = {
  navigation: PropTypes.shape(NavigationScreenPropType),
};

TransCreator.defaultProps = {
  navigation: {},
};

export default TransCreator;
