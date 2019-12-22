import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { View, Text } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import PropTypes from 'prop-types';
import styles from './Style';

const DateSelector = ({ transDate, setTransDate }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  return (
    <View style={styles.dateSection}>
      <MaterialIcons name="date-range" style={styles.dateItemIcon} />
      <View style={styles.dateView}>
        <Text
          onPress={() => setDatePickerVisibility(true)}
          style={{ color: 'grey' }}
        >
          {moment.unix(transDate).format('MM/DD/YYYY')}
        </Text>
        <DateTimePicker
          isVisible={isDatePickerVisible}
          mode="date"
          date={new Date(moment.unix(transDate).format('YYYY-MM-DD'))}
          onCancel={() => setDatePickerVisibility(false)}
          onConfirm={(date) => {
            setTransDate(moment(date).unix());
            setDatePickerVisibility(false);
          }}
          titleStyle={{ color: '#5C6BC0' }}
        />
      </View>
    </View>
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
