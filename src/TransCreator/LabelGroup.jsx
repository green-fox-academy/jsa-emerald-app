import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './Style';
import Labels from '../Common/Labels';
import setThemeStyle from '../Common/theme/setThemeStyle';
import themeColor from '../Common/Color';
import TransactionTypeSelector from './TransactionTypeSelector';

const LabelGroup = ({
  transType, setTransType, transLabel, setTransLabel,
}) => {
  const { themeMode } = useSelector((state) => state.theme);
  const theme = setThemeStyle(themeMode);
  const labels = (transType === 'Expense' ? Labels.Expense : Labels.Income);
  const getColorsForLabel = (item) => {
    if (transLabel.name === item.name) {
      return transType === 'Expense' ? themeColor.gradientColor.red : themeColor.gradientColor.green;
    }
    return [theme.mainColor.backgroundColor, theme.mainColor.backgroundColor];
  };

  return (
    <>
      <TransactionTypeSelector
        transType={transType}
        setTransType={setTransType}
      />
      <View style={[theme.iconCard, { marginTop: 0 }]}>
        <View style={styles.labelContainer}>
          {labels.map((item) => (
            <TouchableHighlight
              key={item.name}
              underlayColor="white"
              onPress={() => setTransLabel(item)}
            >
              <LinearGradient
                colors={getColorsForLabel(item)}
                start={[0.1, 0.9]}
                end={[0.9, 0.1]}
                style={{ margin: 5, padding: 2, borderRadius: 5 }}
              >
                <View style={styles.labelItem}>
                  <Icon
                    name={item.icon}
                    type={item.iconFamily}
                    color={transLabel.name === item.name ? 'white' : item.color}
                    size={30}
                  />
                  <Text style={transLabel.name === item.name
                    ? { color: 'white' } : { color: 'grey' }}
                  >
                    {item.name}
                  </Text>
                </View>
              </LinearGradient>
            </TouchableHighlight>
          ))}
        </View>
      </View>
    </>
  );
};

LabelGroup.propTypes = {
  transType: PropTypes.string,
  setTransType: PropTypes.func,
  transLabel: PropTypes.shape({
    name: PropTypes.string,
    icon: PropTypes.string,
    iconFamily: PropTypes.string,
    color: PropTypes.string,
  }),
  setTransLabel: PropTypes.func,
};

LabelGroup.defaultProps = {
  transType: 'Expense',
  setTransType: null,
  transLabel: PropTypes.shape({
    name: '',
    icon: '',
    iconFamily: '',
    color: '',
  }),
  setTransLabel: null,
};

export default LabelGroup;
