import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import {
  Text,
  DatePicker,
} from 'native-base';
import { View } from 'react-native';
import moment from 'moment';
import PropTypes from 'prop-types';
import styles from './Style';


const DateSelector = ({ transDate, setTransDate }) => (
  <>
    <MaterialIcons name="date-range" style={styles.dateItemIcon} />
    <Text>Date: </Text>
    <View style={styles.dateView}>
      <DatePicker
        defaultDate={new Date()}
        minimumDate={new Date(1990, 1, 1)}
        maximumDate={new Date(2050, 12, 31)}
        locale="en"
        modalTransparent={false}
        animationType="fade"
        androidMode="default"
        placeHolderText={transDate}
        textStyle={{ color: '#5C6BC0' }}
        placeHolderTextStyle={{ color: '#5C6BC0' }}
        onDateChange={(newDate) => setTransDate(moment(newDate).format('DD/MM/YYYY'))}
        disabled={false}
      />
    </View>
  </>
);

DateSelector.propTypes = {
  transDate: PropTypes.string,
  setTransDate: PropTypes.func,
};

DateSelector.defaultProps = {
  transDate: null,
  setTransDate: moment().format('DD/MM/YYYY'),
};

export default DateSelector;
