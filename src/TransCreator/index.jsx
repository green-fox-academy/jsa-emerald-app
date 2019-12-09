import React, { useEffect, useState } from 'react';
import {
  Container,
  Content,
  Item,
  Root,
} from 'native-base';
import {} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import { NavigationScreenPropType } from 'react-navigation';
import styles from './Style';
import PageHeader from './PageHeader';
import PageFooter from './PageFooter';
import AmountInput from './AmountInput';
import DateSelector from './DateSelector';
import { setNewTransactionInsertionSuccess } from '../Stats/actionCreator';

const TransCreator = ({ navigation }) => {
  const [transAmount, setTransAmount] = useState(null);
  const [transType, setTransType] = useState('Expense');
  const [transDate, setTransDate] = useState(moment().unix());

  const { newTransInsertionSuccess } = useSelector((state) => state.Transactions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (newTransInsertionSuccess) {
      navigation.navigate('Stats');
      dispatch(setNewTransactionInsertionSuccess(false));
    }
  });

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
        <PageFooter
          transAmount={transAmount}
          transType={transType}
          transDate={transDate}
          setTransAmount={setTransAmount}
          setTransType={setTransType}
          setTransDate={setTransDate}
        />
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
