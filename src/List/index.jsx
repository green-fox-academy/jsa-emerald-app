import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import styles from '../Common/themeStyle';
import MainHeader from '../Common/MainHeader';
import utils from './utils';
import DateSlider from './DateSlider';
import FilterBtn from './FilterBtn';
import TransList from './TransList';
import EmptyHistory from './EmptyHistory';
import DateOverlay from '../Common/DateOverlay';

const moment = require('moment');

export default function Trans() {
  const { transactions } = useSelector((state) => state.transactions);
  const [view, setCurrentView] = useState('month');
  const [timePeriodOptions, setTimePeriod] = useState(utils.getDateSet(moment(), view));
  const [isOverlayVisible, setOverlayVisibility] = useState(false);

  const updateHeaderView = (type) => {
    setCurrentView(type);
    setTimePeriod(utils.getDateSet(moment(), type));
    setOverlayVisibility(!isOverlayVisible);
  };

  const filterListView = (transactionRecords) => {
    const current = timePeriodOptions[1];
    return utils.filterData(transactionRecords, current, view);
  };

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
            <FilterBtn />
          </View>
          {(transactions.length !== 0)
            ? (
              <TransList
                transactions={filterListView(utils.groupTransactionsByDate(transactions))}
              />
            )
            : <EmptyHistory />}
        </View>
      </ScrollView>
    </View>
  );
}
