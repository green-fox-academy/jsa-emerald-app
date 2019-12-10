import React from 'react';
import {
  Container, Header, Content, View, Text,
} from 'native-base';
import { useSelector } from 'react-redux';
import moment from 'moment';
import styles from './style';
import sortDataByDate from './sortFunction';

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
              <Text>
                {moment.unix(item.date).format('MM/DD/YYYY')}
              </Text>
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
