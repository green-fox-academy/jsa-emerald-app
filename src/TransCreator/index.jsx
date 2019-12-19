import React, { useEffect, useState } from 'react';
import { Root } from 'native-base';
import { View, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import { NavigationScreenPropType } from 'react-navigation';
import { addNewTransaction } from '../Stats/actionCreator';
import LabelGroup from './LabelGroup';
import PageBanner from './PageBanner';
import theme from '../Common/themeStyle';
import Keyboard from './Keyboard';

const TransCreator = ({ navigation }) => {
  const [transAmount, setTransAmount] = useState('');
  const [transExpression, setTransExpression] = useState('');
  const [transType, setTransType] = useState('Expense');
  const [transDate, setTransDate] = useState(moment().unix());
  const [transLabel, setTransLabel] = useState({});
  const [newTransInsertionSuccess, setNewTransInsertionSuccess] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (newTransInsertionSuccess) {
      navigation.navigate('Stats');
      setNewTransInsertionSuccess(false);
    }
  });

  const createHandler = () => {
    if (!transAmount || transAmount === '0.00') {
      Alert.alert('Please enter the amount');
      return;
    }

    dispatch(addNewTransaction(transType, transDate, transAmount, transLabel));
    setNewTransInsertionSuccess(true);
    setTransAmount('');
    setTransType('Expense');
    setTransDate(moment().unix());
    setTransLabel({});
  };

  return (
    <Root>
      <PageBanner
        transLabel={transLabel}
        transType={transType}
        transAmount={transAmount}
        setTransAmount={setTransAmount}
        transExpression={transExpression}
      />
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={theme.deviceBody}>
          <LabelGroup
            transType={transType}
            transLabel={transLabel}
            setTransLabel={setTransLabel}
            setTransType={(type) => {
              setTransType(type);
              setTransLabel({});
              setTransAmount('');
            }}
          />
        </View>
      </View>
      <Keyboard
        calculable={transLabel.name}
        createHandler={createHandler}
        setTransExpression={setTransExpression}
        setTransAmount={setTransAmount}
        transDate={transDate}
        setTransDate={setTransDate}
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
