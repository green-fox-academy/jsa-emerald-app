import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Button } from 'react-native-elements';
import styles from './themeStyle';

export default function MainHeader(props) {
  const { title, onPressBtn, btnName } = props;
  return (
    <View style={styles.mainHeader}>
      <View style={{ flex: 1 }}>
        <Button type="clear" />
      </View>
      <Text style={[styles.headerFont, { flex: 1 }]}>{title}</Text>
      <View style={{
        flex: 1, alignItems: 'flex-end',
      }}
      >
        <Button onPress={onPressBtn} icon={{ name: btnName }} type="clear" />
      </View>
    </View>
  );
}

MainHeader.propTypes = {
  title: PropTypes.string,
  onPressBtn: PropTypes.func,
  btnName: PropTypes.string,
};

MainHeader.defaultProps = {
  title: '',
  onPressBtn: () => {},
  btnName: '',
};
