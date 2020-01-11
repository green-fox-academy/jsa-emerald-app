import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Button } from 'react-native-elements';
import { useSelector } from 'react-redux';
import setThemeStyle from './theme/setThemeStyle';

export default function MainHeader(props) {
  const { title, btnType } = props;
  const { themeMode } = useSelector((state) => state.theme);
  const styles = setThemeStyle(themeMode);

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
          ? btnType.map((item, index) => <Button key={`btnTypeGroup:${index + 1}`} onPress={item.func} icon={{ name: item.name, color: styles.mainColor.color }} type="clear" />) : <View />}
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
