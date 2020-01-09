import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { ListItem, Overlay, Button } from 'react-native-elements';
import { useSelector } from 'react-redux';
import styles from '../Common/themeStyle';
import MainHeader from '../Common/MainHeader';
import utils from './utils';
import DateSlider from './DateSlider';
import FilterBtn from './FilterBtn';
import TransList from './TransList';
import EmptyHistory from './EmptyHistory';
import ViewSelectionItem from './ViewSelectionItem';

const moment = require('moment');

export default function Stats() {
  const { transactions } = useSelector((state) => state.transactions);
  const [view, setCurrentView] = useState('month');
  const [timePeriodOptions, setTimePeriod] = useState(utils.getDateSet(moment(), view));
  const [isOverlayVisible, setOverlayVisibility] = useState(false);
  const [transFilter, setTransFilter] = useState('all');

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

  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <Overlay height={200} isVisible={isOverlayVisible}>
        <View>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
            <Button
              id="btn-stats-index-vsb"
              icon={{ name: 'close' }}
              type="clear"
              onPress={() => setOverlayVisibility(false)}
            />
          </View>
          <View style={{ marginTop: 20 }}>
            <ViewSelectionItem title="Month" pressHandler={updateHeaderView} />
            <ViewSelectionItem title="Year" pressHandler={updateHeaderView} />
          </View>
        </View>
      </Overlay>
      <MainHeader title="Activity" onPressBtn={() => setOverlayVisibility(true)} btnName="filter" />
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
