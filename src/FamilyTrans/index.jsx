import React, { useState, useEffect } from 'react';
import {
  View, ScrollView, RefreshControl, Dimensions, ImageBackground,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from 'react-navigation-hooks';
import { getFamilyTransactions } from './actionCreator';
import MainHeader from '../Common/MainHeader';
import DateSlider from '../Common/DateSlider';
import utils from '../Stats/utils';
import FilterBtn from '../Stats/FilterBtn';
import TransList from '../Stats/TransList';
import EmptyHistory from '../Stats/EmptyHistory';
import DateOverlay from '../Common/DateOverlay';
import setThemeStyle from '../Common/theme/setThemeStyle';
import SubmitBtn from '../Personal/SubmitBtn';

const moment = require('moment');

const bgImg = require('../../assets/blur.jpg');

export default function Trans() {
  const { transactions, isInProgress } = useSelector((state) => state.familyTrans);
  const { accessToken } = useSelector((state) => state.user);
  const { themeMode } = useSelector((state) => state.theme);
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  const styles = setThemeStyle(themeMode);
  const [view, setCurrentView] = useState('month');
  const [timePeriodOptions, setTimePeriod] = useState(utils.getDateSet(moment(), view));
  const [isOverlayVisible, setOverlayVisibility] = useState(false);
  const [transFilter, setTransFilter] = useState('all');

  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;


  const onRefresh = React.useCallback(() => {
    dispatch(getFamilyTransactions());
  }, [isInProgress]);


  useEffect(() => {
    dispatch(getFamilyTransactions());
  }, []);

  const updateHeaderView = (type) => {
    setCurrentView(type);
    setTimePeriod(utils.getDateSet(moment(), type));
    setOverlayVisibility(!isOverlayVisible);
  };

  const filterTransactions = (transactionsList) => {
    const transactionsWithSpecificType = utils.filterTransactionByType(
      transactionsList,
      transFilter,
    );
    return utils.filterTransactionsByDate(
      transactionsWithSpecificType,
      timePeriodOptions[1],
      view,
    );
  };

  const calculateSumByType = (dataList, type) => dataList
    .filter((item) => item.type === type)
    .reduce((sum, { amount }) => sum + parseFloat(amount), 0);

  const filteredTransactions = filterTransactions(transactions);
  const processedTransactions = utils.groupTransactionsByDate(filteredTransactions);
  const totalExpense = calculateSumByType(filteredTransactions, 'Expense');
  const totalIncome = calculateSumByType(filteredTransactions, 'Income');
  const navBarFunc = [
    {
      name: 'filter',
      func: () => setOverlayVisibility(true),
    },
  ];

  return (
    <>
      {(accessToken) ? (
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <DateOverlay
            isOverlayVisible={isOverlayVisible}
            onPressBtn={(viewValue) => updateHeaderView(viewValue)}
            onPressClose={() => setOverlayVisibility(false)}
          />
          <MainHeader title="Transactions" btnType={navBarFunc} />
          <DateSlider
            viewSet={timePeriodOptions}
            onPressBtn={(value, type) => setTimePeriod(utils.getDateSet(value, type))}
            viewType={view}
          />
          <ScrollView
            style={styles.deviceBody}
            refreshControl={
              <RefreshControl refreshing={isInProgress} onRefresh={onRefresh} />
            }
          >
            <View style={{ marginBottom: 20 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <FilterBtn
                  currentFilter={transFilter}
                  onFilterChange={(newFilter) => (newFilter === transFilter ? setTransFilter('all') : setTransFilter(newFilter))}
                  totalExpense={totalExpense}
                  totalIncome={totalIncome}
                />
              </View>
              {(transactions.length !== 0)
                ? (
                  <TransList
                    transactions={processedTransactions}
                  />
                )
                : <EmptyHistory />}
            </View>
          </ScrollView>
        </View>
      )
        : (
          <ImageBackground
            source={bgImg}
            style={{
              width: screenWidth, height: screenHeight, alignItems: 'center', justifyContent: 'center',
            }}
          >
            <SubmitBtn
              disabled={false}
              onPressBtn={() => navigate('Me')}
              title="Please Login To Unlock"
            />
          </ImageBackground>
        )}
    </>
  );
}
