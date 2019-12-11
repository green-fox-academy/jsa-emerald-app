import React from 'react';
import { View, ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';
import { useSelector } from 'react-redux';
import moment from 'moment';
import sortDataByDate from './utils';
import styles from '../Common/themeStyle';

export default function Stats() {
  const { transactions } = useSelector((state) => state.transactions);
  return (
    <ScrollView>
      <View style={styles.card}>
        {sortDataByDate(transactions).map((item, index) => (
          <ListItem
            key={`ListKey${index + 1}`}
            title={item.label ? item.label : 'Undefined'}
            subtitle={moment.unix(item.date).format('MM/DD/YYYY')}
            rightTitle={
              item.type === 'Income'
                ? ` + $${item.amount}`
                : ` - $${item.amount}`
            }
            leftIcon={{
              title: 'Unknown',
              name: 'attach-money',
            }}
          />
        ))}
      </View>
    </ScrollView>
  );
}
