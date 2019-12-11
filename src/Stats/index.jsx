import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import { useSelector } from 'react-redux';
import styles from '../Common/themeStyle';
import MainHeader from '../Common/mainHeader';
import LargeButton from '../Common/largeBtn';
import GradientIcon from '../Common/icon';
import groupData from './groupData';
import utils from './utils';

export default function Stats() {
  const { transactions } = useSelector((state) => state.transactions);
  // console.log(groupData(transactions));
  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <MainHeader title="Activity" />
      <ScrollView style={styles.deviceBody}>
        {
          groupData(transactions).map((value, index) => (
            <View style={styles.card} key={`DateGroup:${index + 1}`}>
              <View style={styles.cardAlign}>
                <Text style={styles.cardHeader}>
                  {value[0].date}
                </Text>
                <Text style={styles.cardHeader}>
                  {utils.sumAmount(value)}
                </Text>
              </View>
              {value.map((item, idx) => (
                <ListItem
                  key={`InfoGroup:${idx + 1}`}
                  leftElement={<GradientIcon name={item.icon ? item.icon : 'home'} color={item.icon && item.icon.color ? item.icon.color : 'blue'} iconFamily={item.icon && item.icon.iconFamily ? item.icon.iconFamily : ''} />}
                  title={item.label ? item.label : 'Unknown'}
                  subtitle={item.comment ? item.comment : 'Unknown'}
                  subtitleStyle={{ color: 'grey' }}
                  rightTitle={item.type === 'Expense' ? `-$${item.amount}` : `+$${item.amount}`}
                />
              ))}

            </View>
          ))
          // groupData(transactions).map(value=>{
          //   {console.log(value[0])}
          //   <View style={styles.card}>
          //     <View style={styles.cardAlign}>
          //       <Text style={styles.cardHeader}>{value[0].date
          //       }</Text>
          //       <Text style={styles.cardHeader}>-$1,400.00</Text>
          //     </View>
          //   {value.map((item, index) => (
          //     <ListItem
          //       key={`ListKey${index + 1}`}
          //       title={item.label ? item.label : 'Undefined'}
          //       subtitle={moment.unix(item.date).format('MM/DD/YYYY')}
          //       rightTitle={
          //       item.type === 'Income'
          //         ? ` + $${item.amount}`
          //         : ` - $${item.amount}`
          //     }
          //       leftIcon={{
          //         title: 'Unknown',
          //         name: 'attach-money',
          //       }}
          //     />
          //   ))}
          // </View>
          // })
        }

      </ScrollView>
    </View>
  );
}
