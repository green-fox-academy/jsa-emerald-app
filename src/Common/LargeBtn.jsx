import React from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import PropTypes from 'prop-types';
import styles from './themeStyle';
import themeColor from './Color';

export default function LargeButton({
  subtitle, title, note, bgColor, btnWidth,
}) {
  const btnStyle = `${bgColor}LargeBtn`;
  return (
    <View style={[styles[btnStyle], { width: btnWidth }]}>
      <LinearGradient
        colors={themeColor.gradientColor[bgColor]}
        start={[0.1, 0.9]}
        end={[0.9, 0.1]}
        style={{ borderRadius: 10, padding: 20 }}
      >
        <Text style={styles.largeBtnFont}>{subtitle}</Text>
        <Text style={styles.largeBtnHeader}>
          {title}
        </Text>
        <Text style={styles.largeBtnFont}>{note}</Text>
      </LinearGradient>
    </View>
  );
}

LargeButton.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string,
  note: PropTypes.string,
  bgColor: PropTypes.string,
  btnWidth: PropTypes.string,
};

LargeButton.defaultProps = {
  subtitle: '',
  title: '',
  note: '',
  bgColor: '',
  btnWidth: '',
};
