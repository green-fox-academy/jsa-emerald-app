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
        placeHolderText={moment.unix(transDate).format('MM/DD/YYYY')}
        textStyle={{ color: '#5C6BC0' }}
        placeHolderTextStyle={{ color: '#5C6BC0' }}
        onDateChange={(newDate) => setTransDate(moment(newDate).unix())}
        disabled={false}
      />
    </View>
  </>
);

DateSelector.propTypes = {
  transDate: PropTypes.number,
  setTransDate: PropTypes.func,
};

DateSelector.defaultProps = {
  transDate: moment().unix(),
  setTransDate: null,
};

export default DateSelector;
