import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import MainHeader from '../Common/MainHeader';
import DateSlider from '../Common/DateSlider';
import DateOverlay from '../Common/DateOverlay';
import utils from '../List/utils';

const moment = require('moment');

export default function Stats() {
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
  console.log('==============');

  console.log(filterListView(utils.groupTransactionsByDate(transactions)));

  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <DateOverlay
        isOverlayVisible={isOverlayVisible}
        onPressBtn={(viewValue) => updateHeaderView(viewValue)}
        onPressClose={() => setOverlayVisibility(false)}
      />
      <MainHeader title="Stats" btnType={navBarFunc} />
      <DateSlider
        viewSet={timePeriodOptions}
        onPressBtn={(value, type) => setTimePeriod(utils.getDateSet(value, type))}
        viewType={view}
      />
    </View>
  );
}
