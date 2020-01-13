import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getFamilyTransactions } from './actionCreator';
import MainHeader from '../Common/MainHeader';
import DateSlider from '../Common/DateSlider';
import utils from '../Stats/utils';
import FilterBtn from '../Stats/FilterBtn';
import TransList from '../Stats/TransList';
import EmptyHistory from '../Stats/EmptyHistory';
import DateOverlay from '../Common/DateOverlay';
import setThemeStyle from '../Common/theme/setThemeStyle';

const moment = require('moment');

export default function Trans() {
  const { transactions } = useSelector((state) => state.familyTrans);
  const { themeMode } = useSelector((state) => state.theme);
  const styles = setThemeStyle(themeMode);
  const [view, setCurrentView] = useState('month');
  const [timePeriodOptions, setTimePeriod] = useState(utils.getDateSet(moment(), view));
  const [isOverlayVisible, setOverlayVisibility] = useState(false);
  const [transFilter, setTransFilter] = useState('all');
  const dispatch = useDispatch();

  dispatch(getFamilyTransactions());

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
      <ScrollView style={styles.deviceBody}>
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
  );
}
