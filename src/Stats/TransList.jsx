import React, { useState, useEffect } from 'react';
import {
  View, Text, Animated,
} from 'react-native';
import { ListItem } from 'react-native-elements';
import { useSelector } from 'react-redux';
import GradientIcon from '../Common/GradientIcon';
import utils from './utils';
import setThemeStyle from '../Common/theme/setThemeStyle';

export default function TransList(props) {
  const { transactions } = props;
  const { themeMode } = useSelector((state) => state.theme);
  const styles = setThemeStyle(themeMode);
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
    }).start();

    return () => Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 0,
    }).start();
  }, [transactions]);

  return (
    transactions.map((groupedRecordsByDate, index) => (
      <Animated.View style={{ opacity: fadeAnim }} key={`DateGroup:${index + 1}`}>
        <View style={styles.card}>
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
      </Animated.View>
    ))
  );
}
