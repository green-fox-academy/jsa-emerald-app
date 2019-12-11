import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './Style';
import labels from '../Common/Labels';
import theme from '../Common/themeStyle';
import themeColor from '../Common/Color';
import LabelGroupSelector from './LabelGroupSelector';

const LabelGroup = ({
  transType, setTransType, transIcon, setTransIcon,
}) => {
  const target = (transType === 'Expense' ? labels.Expense : labels.Income);
  const colorPicker = (item) => {
    if (transIcon.label === item.label) {
      return transType === 'Expense' ? themeColor.gradientColor.red : themeColor.gradientColor.green;
    }
    return ['white', 'white'];
  };
  return (
    <View style={theme.card}>
      <LabelGroupSelector
        transType={transType}
        setTransType={setTransType}
        setTransIcon={setTransIcon}
      />
      <View style={styles.labelContainer}>
        {target.map((item) => (
          <TouchableHighlight
            key={item.label}
            underlayColor="white"
            onPress={() => setTransIcon({
              label: item.label, icon: item.icon, iconFamily: item.iconFamily, color: item.color,
            })}
          >
            <LinearGradient
              colors={colorPicker(item)}
              start={[0.1, 0.9]}
              end={[0.9, 0.1]}
              style={{ margin: 5, padding: 2, borderRadius: 5 }}
            >
              <View style={styles.labelItem}>
                <Icon name={item.icon} type={item.iconFamily} color={transIcon.label === item.label ? 'white' : item.color} size={30} />
                <Text style={transIcon.label === item.label ? { color: 'white' } : { color: 'grey' }}>{item.label}</Text>
              </View>
            </LinearGradient>
          </TouchableHighlight>

        ))}
      </View>
    </View>
  );
};

LabelGroup.propTypes = {
  transType: PropTypes.string,
  setTransType: PropTypes.func,
  transIcon: PropTypes.shape({
    label: PropTypes.string,
    icon: PropTypes.string,
    iconFamily: PropTypes.string,
    color: PropTypes.string,
  }),
  setTransIcon: PropTypes.func,
};

LabelGroup.defaultProps = {
  transType: 'Expense',
  setTransType: null,
  transIcon: PropTypes.shape({
    label: '',
    icon: '',
    iconFamily: '',
    color: '',
  }),
  setTransIcon: null,
};

export default LabelGroup;
