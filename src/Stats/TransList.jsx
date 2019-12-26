import React from 'react';
import { View, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import GradientIcon from '../Common/GradientIcon';
import styles from '../Common/themeStyle';
import utils from './utils';

export default function TransList(props) {
  const { transactions } = props;
  return (
    transactions.map((groupedRecordsByDate, index) => (
      <View style={styles.card} key={`DateGroup:${index + 1}`}>
        <View style={styles.cardAlign}>
          <Text style={styles.cardHeader}>
            {groupedRecordsByDate[0].date}
          </Text>
          <Text style={styles.cardHeader}>
            {utils.sumAmount(groupedRecordsByDate)}
          </Text>
        </View>
        {groupedRecordsByDate.map((item, idx) => (
          <ListItem
            key={`InfoGroup:${idx + 1}`}
            leftElement={(
              <GradientIcon
                name={item.label ? item.label.icon : 'home'}
                color={item.label && item.label.color ? item.label.color : '#9e87fc'}
                iconFamily={item.label && item.label.iconFamily ? item.label.iconFamily : ''}
              />
            )}
            title={item.label ? item.label.name : 'Unknown'}
            subtitle={item.comment ? item.comment : 'Unknown'}
            subtitleStyle={{ color: 'grey' }}
            rightTitle={utils.transType(item.amount, item.type)}
          />
        ))}
      </View>
    ))
  );
}
