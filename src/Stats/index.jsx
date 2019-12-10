import React from 'react';
import {
  Container, Header, Content, View, Text,
} from 'native-base';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const Moment = require('moment');

const styles = StyleSheet.create({
  inColor: {
    color: 'green',
  },
  outColor: {
    color: 'red',
  },
  inCardBoard: {
    borderWidth: 1.5,
    borderColor: 'grey',
    borderStyle: 'solid',
    borderRadius: 10,
    borderRightColor: 'green',
    flex: 1,
    margin: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    paddingTop: 15,
  },
  noteText: {
    color: 'grey',
  },
});

const sortDataByDate = (data) => {
  const byDate = data.slice(0);
  byDate.sort((a, b) => new Moment(b.date).format('YYYYMMDD') - new Moment(a.date).format('YYYYMMDD'));
  return byDate;
};

export default function Stats() {
  const { transactions } = useSelector((state) => state.transactions);
  return (
    <Container>
      <Header />
      <Content>
        {sortDataByDate(transactions).map((item, index) => (
          <View key={`itemID:${index + 1}`} style={styles.inCardBoard}>
            <View style={{ flex: 1 }}>
              <Text>Icon</Text>
            </View>
            <View style={{ flex: 2 }}>
              <Text>Shopping</Text>
              <Text style={styles.noteText}>Buy a apple</Text>
            </View>
            <View style={{ flex: 2 }}>
              <Text>{item.date}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={item.type === 'Income' ? styles.inColor : styles.outColor}>{item.type === 'Income' ? `$ +${item.amount}` : `$ -${item.amount}`}</Text>
            </View>
          </View>
        ))}
      </Content>
    </Container>
  );
}
