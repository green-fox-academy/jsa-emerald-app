import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import PropTypes from 'prop-types';
import styles from './themeStyleLight';
import themeColor from './Color';

export default function LargeButton({
  subtitle, title, note, bgColor, btnWidth, pressHandler, isShadowVisible,
}) {
  const btnStyle = `${bgColor}LargeBtn`;

  return (
    <View style={[
      styles[btnStyle],
      isShadowVisible ? styles.largeBtnShadow : null,
      { width: btnWidth },
    ]}
    >
      <TouchableOpacity onPress={pressHandler}>
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
      </TouchableOpacity>
    </View>

  );
}

LargeButton.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string,
  note: PropTypes.string,
  bgColor: PropTypes.string,
  btnWidth: PropTypes.string,
  pressHandler: PropTypes.func.isRequired,
  isShadowVisible: PropTypes.bool.isRequired,
};

LargeButton.defaultProps = {
  subtitle: '',
  title: '',
  note: '',
  bgColor: '',
  btnWidth: '',
};
