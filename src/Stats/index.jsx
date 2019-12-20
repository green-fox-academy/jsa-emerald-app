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

  const filterListView = (typedTransaction) => {
    const groupedTransaction = utils.groupTransactionsByDate(typedTransaction);
    const current = timePeriodOptions[1];
    return utils.filterData(groupedTransaction, current, view);
  };

  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <Overlay height={200} isVisible={isOverlayVisible}>
        <View>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
            <Button icon={{ name: 'close' }} type="clear" onPress={() => setOverlayVisibility(false)} />
          </View>
          <View style={{ marginTop: 20 }}>
            <ListItem title="Month" topDivider bottomDivider onPress={() => updateHeaderView('month')} />
            <ListItem title="Year" bottomDivider onPress={() => updateHeaderView('year')} />
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
              transFilter={transFilter}
              setTransFilter={setTransFilter}
              groupTransactions={filterListView(transactions)}
            />
          </View>
          {(transactions.length !== 0)
            ? (
              <TransList
                transactions={filterListView(utils.filterType(transactions, transFilter))}
              />
            )
            : <EmptyHistory />}
        </View>
      </ScrollView>
    </View>
  );
}
