import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Header, Text, Left, Right, Button, Body, Segment,
} from 'native-base';
import styles from './Style';
import { setNewTransactionType } from '../Stats/redux/actionCreator';

export default () => {
  const { newTransType } = useSelector((state) => state.transactions);
  const dispatch = useDispatch();

  return (
    <Header transparent>
      <Left />
      <Body>
        <Segment style={styles.headerSegment}>
          <Button bordered first active={newTransType === 'Expense'} onPress={() => dispatch(setNewTransactionType('Expense'))}>
            <Text style={newTransType !== 'Expense' ? styles.nonActive : {}}>Expense</Text>
          </Button>
          <Button bordered last active={newTransType === 'Income'} onPress={() => dispatch(setNewTransactionType('Income'))}>
            <Text style={newTransType !== 'Income' ? styles.nonActive : {}}>Income</Text>
          </Button>
        </Segment>
      </Body>
      <Right />
    </Header>
  );
};
