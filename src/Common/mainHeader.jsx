import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './themeStyle';

export default function MainHeader(props) {
  const { title } = props;
  return (
    <View style={[styles.headerFormat, { height: 100 }]}>
      <Text>{title}</Text>
    </View>
  );
}

MainHeader.propTypes = {
  title: PropTypes.string,
};

MainHeader.defaultProps = {
  title: '',
};
