import React from 'react';
import {
  Header, Text, Left, Right, Button, Body, Segment,
} from 'native-base';
import PropTypes from 'prop-types';
import styles from './Style';

const PageHeader = ({ transType, setTransType }) => (
  <Header transparent>
    <Left />
    <Body>
      <Segment style={styles.headerSegment}>
        <Button bordered first active={transType === 'Expense'} onPress={() => setTransType('Expense')}>
          <Text style={transType !== 'Expense' ? styles.nonActive : {}}>Expense</Text>
        </Button>
        <Button bordered last active={transType === 'Income'} onPress={() => setTransType('Income')}>
          <Text style={transType !== 'Income' ? styles.nonActive : {}}>Income</Text>
        </Button>
      </Segment>
    </Body>
    <Right />
  </Header>
);

PageHeader.propTypes = {
  transType: PropTypes.string,
  setTransType: PropTypes.func,
};

PageHeader.defaultProps = {
  transType: 'Expense',
  setTransType: null,
};

export default PageHeader;
