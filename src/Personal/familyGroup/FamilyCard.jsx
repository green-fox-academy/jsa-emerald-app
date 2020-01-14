import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { ListItem } from 'react-native-elements';
import PropTypes from 'prop-types';
import setThemeStyle from '../../Common/theme/setThemeStyle';

export default function FamilyCard({ username, note, imgUrl }) {
  const { themeMode } = useSelector((state) => state.theme);
  const styles = setThemeStyle(themeMode);
  return (
    <View style={[styles.card, { padding: 0, overflow: 'hidden' }]}>
      <ListItem
        leftAvatar={{ source: { uri: imgUrl } }}
        title={username}
        titleStyle={styles.listHeading}
        subtitle={note}
        subtitleStyle={{ color: 'grey' }}
        containerStyle={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}
      />
    </View>
  );
}


FamilyCard.propTypes = {
  username: PropTypes.string,
  note: PropTypes.string,
  imgUrl: PropTypes.string,
};

FamilyCard.defaultProps = {
  username: '',
  note: '',
  imgUrl: '',
};
