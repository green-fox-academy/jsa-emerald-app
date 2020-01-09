import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import styles from '../Common/themeStyle';
import MainHeader from '../Common/MainHeader';
import DateSlider from '../Common/DateSlider';
import DateOverlay from '../Common/DateOverlay';
import utils from '../Stats/utils';
import statsUtils from './chartUtils';
import LineGraph from './LineGraph';

const moment = require('moment');

export default function Chart() {
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
    return statsUtils.filterData(transactionRecords, current, view);
  };


  const navBarFunc = [
    {
      name: 'filter',
      func: () => setOverlayVisibility(true),
    },
  ];

  const filteredDataByDate = filterListView(utils.groupTransactionsByDate(transactions));

  const filterDataByPeriod = statsUtils.filterDataByPeriod(
    transactions, timePeriodOptions[1], view,
  );

  const dataSetByDate = statsUtils.convertToLineGraphDataset(filteredDataByDate, 'Expense');

  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <DateOverlay
        isOverlayVisible={isOverlayVisible}
        onPressBtn={(viewValue) => updateHeaderView(viewValue)}
        onPressClose={() => setOverlayVisibility(false)}
      />
      <MainHeader title="Chart" btnType={navBarFunc} />
      <DateSlider
        viewSet={timePeriodOptions}
        onPressBtn={(value, type) => setTimePeriod(utils.getDateSet(value, type))}
        viewType={view}
      />
      <ScrollView style={styles.deviceBody}>
        <View style={styles.card}>
          {filterDataByPeriod.length !== 0
            ? <LineGraph dataSet={dataSetByDate} style={{ flex: 1 }} />
            : <View />}
        </View>
      </ScrollView>
    </View>
  );
}
