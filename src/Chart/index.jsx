import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import MainHeader from '../Common/MainHeader';
import DateSlider from '../Common/DateSlider';
import DateOverlay from '../Common/DateOverlay';
import setThemeStyle from '../Common/theme/setThemeStyle';
import EmptyHistory from '../Stats/EmptyHistory';
import utils from '../Stats/utils';
import statsUtils from './chartUtils';
import LineGraph from './LineGraph';
import PieGraph from './PieGraph';

const moment = require('moment');

export default function Chart() {
  const { transactions } = useSelector((state) => state.transactions);
  const { themeMode } = useSelector((state) => state.theme);
  const styles = setThemeStyle(themeMode);
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

  const filteredDataByDate = filterListView(utils.groupTransactionsByDate(transactions));

  const filterDataByPeriod = statsUtils.filterDataByPeriod(
    transactions, timePeriodOptions[1], view,
  );

  const dataSetByDate = statsUtils.convertToLineGraphDataset(filteredDataByDate, 'Expense');
  const graphDataSet = statsUtils.convertToDatasetByCategory(filterDataByPeriod, 'Expense');

  const isLineChartExist = filterDataByPeriod.length !== 0 && dataSetByDate.labels.length !== 0;
  const isPieChartExist = filterDataByPeriod.length !== 0 && graphDataSet.length !== 0;

  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <DateOverlay
        isOverlayVisible={isOverlayVisible}
        onPressBtn={(viewValue) => updateHeaderView(viewValue)}
        onPressClose={() => setOverlayVisibility(false)}
      />
      <MainHeader title="Charts" btnType={navBarFunc} />
      <DateSlider
        viewSet={timePeriodOptions}
        onPressBtn={(value, type) => setTimePeriod(utils.getDateSet(value, type))}
        viewType={view}
      />
      <ScrollView style={styles.deviceBody}>
        {isLineChartExist && isPieChartExist ? (
          <>
            <View style={styles.card}>
              <LineGraph dataSet={dataSetByDate} style={{ flex: 1 }} />
            </View>
            <View style={styles.card}>
              <PieGraph graphDataSet={graphDataSet} style={{ flex: 1 }} />
            </View>
          </>
        )
          : <EmptyHistory />}
      </ScrollView>
    </View>
  );
}
