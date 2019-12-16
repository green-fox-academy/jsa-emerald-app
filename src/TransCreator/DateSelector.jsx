import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { View, Text } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import PropTypes from 'prop-types';
import styles from './Style';

const DateSelector = ({ transDate, setTransDate }) => {
  const [datePickerShow, setDatePickerShow] = useState(false);
  return (
    <>
      <MaterialIcons name="date-range" style={styles.dateItemIcon} />
      <Text>Date: </Text>
      <View style={styles.dateView}>
        <Text
          onPress={() => setDatePickerShow(true)}
          style={{ padding: 5 }}
        >
          {moment.unix(transDate).format('MM/DD/YYYY')}
        </Text>
        <DateTimePicker
          isVisible={datePickerShow}
          mode="date"
          date={new Date(moment.unix(transDate).format('YYYY-MM-DD'))}
          onCancel={() => setDatePickerShow(false)}
          onConfirm={(date) => {
            setTransDate(moment(date).unix());
            setDatePickerShow(false);
          }}
          titleStyle={{ color: '#5C6BC0' }}
        />
      </View>
    </>
  );
};

DateSelector.propTypes = {
  transDate: PropTypes.number,
  setTransDate: PropTypes.func,
};

DateSelector.defaultProps = {
  transDate: moment().unix(),
  setTransDate: null,
};

export default DateSelector;
