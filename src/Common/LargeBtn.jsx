import React from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import PropTypes from 'prop-types';
import styles from './themeStyle';
import themeColor from './Color';

export default function LargeButton({
  subtitle, title, note, bgColor, numberOfBtns,
}) {
  const btnStyle = `${bgColor}LargeBtn`;
  const btnWidth = `${100 / numberOfBtns - 2}%`;

  return (
    <View style={[styles[btnStyle], { width: btnWidth }]}>
      <LinearGradient
        colors={themeColor.gradientColor[bgColor]}
        start={[0.1, 0.9]}
        end={[0.9, 0.1]}
        style={{ borderRadius: 10, padding: 20 }}
      >
        <Text style={styles.largeBtnFont}>{subtitle}</Text>
        <Text style={{
          color: 'white', fontSize: 18, fontWeight: '400', marginTop: 5, marginBottom: 5,
        }}
        >
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
  numberOfBtns: PropTypes.number,
};

LargeButton.defaultProps = {
  subtitle: '',
  title: '',
  note: '',
  bgColor: '',
  numberOfBtns: 1,
};
