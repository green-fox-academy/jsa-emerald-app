import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Button } from 'react-native-elements';
import styles from './themeStyle';

export default function MainHeader(props) {
  const { title, btnType } = props;
  return (
    <View style={styles.mainHeader}>
      <View style={{ flex: 1, alignItems: 'flex-start', marginBottom: -10 }}>
        <Button type="clear" />
      </View>
      <Text style={[styles.headerFont, { flex: 1 }]}>{title}</Text>
      <View style={{
        flex: 1, alignContent: 'flex-end', marginBottom: -10, justifyContent: 'flex-end', flexDirection: 'row', alignItems: 'flex-end',
      }}
      >
        {(btnType.length)
          ? btnType.map((item, index) => <Button key={`btnTypeGroup:${index + 1}`} onPress={item.func} icon={{ name: item.name }} type="clear" />) : <View />}
      </View>
    </View>
  );
}

MainHeader.propTypes = {
  title: PropTypes.string,
  btnType: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string, func: PropTypes.func })),
};

MainHeader.defaultProps = {
  title: '',
  btnType: [],
};
