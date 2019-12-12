import React, { useEffect, useState } from 'react';
import { Item, Root } from 'native-base';
import { View, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import { NavigationScreenPropType } from 'react-navigation';

import styles from './Style';
import PageFooter from './PageFooter';
import DateSelector from './DateSelector';
import { addNewTransaction } from '../Stats/actionCreator';
import LabelGroup from './LabelGroup';
import Header from './PageHeader';
import theme from '../Common/themeStyle';
import Keyboard from './Keyboard';

const TransCreator = ({ navigation }) => {
  const [transAmount, setTransAmount] = useState(0);
  const [transType, setTransType] = useState('Expense');
  const [transDate, setTransDate] = useState(moment().unix());
  const [transIcon, setTransIcon] = useState({});
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

    dispatch(addNewTransaction(transType, transDate, transAmount, transIcon));
    setNewTransInsertionSuccess(true);
    setTransAmount(0);
    setTransType('Expense');
    setTransDate(moment().unix());
    setTransIcon({});
  };

  return (
    <Root>
      <Header
        transIcon={transIcon}
        transType={transType}
        transAmount={transAmount}
        setTransAmount={setTransAmount}
      />
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={theme.deviceBody}>
          <LabelGroup
            transType={transType}
            setTransType={setTransType}
            transIcon={transIcon}
            setTransIcon={setTransIcon}
          />
          {/* <Item style={styles.dateItem}>
            <DateSelector transDate={transDate} setTransDate={setTransDate} />
          </Item> */}

          {/* <PageFooter createHandler={createHandler} /> */}
        </View>
      </View>
      <Keyboard
        transIcon={transIcon}
        createHandler={createHandler}
        transAmount={transAmount}
        setTransAmount={setTransAmount}
      />
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
