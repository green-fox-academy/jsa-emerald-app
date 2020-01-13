import React from 'react';
import { View, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import { useSelector } from 'react-redux';
import GradientIcon from '../Common/GradientIcon';
import utils from './utils';
import setThemeStyle from '../Common/theme/setThemeStyle';

export default function TransList(props) {
  const { transactions } = props;
  const { themeMode } = useSelector((state) => state.theme);
  const styles = setThemeStyle(themeMode);
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
                name={item.labelName ? item.labelName.icon : 'home'}
                color={item.labelName && item.labelName.color ? item.labelName.color : '#9e87fc'}
                iconFamily={item.labelName && item.labelName.iconFamily ? item.labelName.iconFamily : ''}
              />
            )}
            title={item.labelName ? item.labelName.name : 'Unknown'}
            titleStyle={styles.listHeading}
            subtitle={item.creator ? item.creator : 'Unknown'}
            subtitleStyle={item.creator ? { color: 'grey' } : { display: 'none' }}
            rightTitle={utils.transType(item.amount, item.type)}
            rightTitleStyle={styles.listHeading}
            containerStyle={{ backgroundColor: 'rgba(255,0, 0, 0)' }}
          />
        ))}
      </View>
    ))
  );
}
