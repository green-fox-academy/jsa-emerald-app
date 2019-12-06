import React, { useEffect } from 'react';
import {
  Container,
  Content,
  Item,
  Root,
} from 'native-base';
import {} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { NavigationScreenPropType } from 'react-navigation';
import styles from './Style';
import PageHeader from './PageHeader';
import PageFooter from './PageFooter';
import AmountInput from './AmountInput';
import DateSelector from './DateSelector';
import { setNewTransactionInsertionSuccess } from '../Stats/actionCreator';

const TransCreator = ({ navigation }) => {
  const { newTransInsertionSuccess } = useSelector((state) => state.transactions);
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
        <PageHeader />
        <Content padder>
          <Item style={styles.amountInputOuter}>
            <AmountInput />
          </Item>
          <Item style={styles.dateItem}>
            <DateSelector />
          </Item>
        </Content>
        <PageFooter />
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
