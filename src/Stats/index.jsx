import React, { useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { ListItem, Overlay, Button } from 'react-native-elements';
import { useSelector } from 'react-redux';
import styles from '../Common/themeStyle';
import MainHeader from '../Common/MainHeader';
import utils from './utils';
import SubHeader from './DateSlider';
import FilterBtn from './FilterBtn';
import TransList from './TransList';
import EmptyTrans from './EmptyTrans';

const moment = require('moment');

export default function Stats() {
  const { transactions } = useSelector((state) => state.transactions);
  const [currentMonthSet, setCurrentMonthSet] = useState(utils.getDateSet(moment(), 'months'));
  const [currentYearSet, setCurrentYearSet] = useState(utils.getDateSet(moment(), 'years'));
  const [view, setCurrentView] = useState('month');
  const [isOverlayVisible, setOverlayVisibility] = useState(false);

  const updateCurrent = (value, type) => {
    switch (type) {
      case 'month':
        setCurrentMonthSet(utils.getDateSet(value, 'months'));
        break;
      case 'year':
        setCurrentYearSet(utils.getDateSet(value, 'years'));
        break;
      default:
        break;
    }
  };

  const updateHeaderView = (type) => {
    setCurrentView(type);
    setOverlayVisibility(!isOverlayVisible);
  };

  const filterListView = (transactionRecords) => {
    const current = view === 'month' ? currentMonthSet[1] : currentYearSet[1];
    return utils.filterData(transactionRecords, current, view);
  };

  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <Overlay height={200} isVisible={isOverlayVisible}>
        <View>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
            <Button icon={{ name: 'close' }} type="clear" onPress={() => setOverlayVisibility(!isOverlayVisible)} />
          </View>
          <View style={{ marginTop: 20 }}>
            <ListItem title="Month" topDivider bottomDivider onPress={() => updateHeaderView('month')} />
            <ListItem title="Year" bottomDivider onPress={() => updateHeaderView('year')} />
          </View>
        </View>
      </Overlay>
      <MainHeader title="Activity" onPressBtn={() => setOverlayVisibility(!isOverlayVisible)} />
      <SubHeader viewSet={view === 'month' ? currentMonthSet : currentYearSet} onPressBtn={updateCurrent} viewType={view} />
      <ScrollView style={styles.deviceBody}>
        <View style={{ marginBottom: 20 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <FilterBtn />
          </View>
          {(transactions.length !== 0)
            ? <TransList transactions={filterListView(utils.groupData(transactions))} />
            : <EmptyTrans />}
        </View>
      </ScrollView>
    </View>
  );
}
