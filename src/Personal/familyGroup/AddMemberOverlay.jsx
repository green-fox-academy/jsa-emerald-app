import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  View, Dimensions, Platform, ScrollView,
} from 'react-native';
import { Overlay, SearchBar, ListItem } from 'react-native-elements';

import PropTypes from 'prop-types';
import { searchMember } from './actionCreator';

export default function AddMemberOverlay({ isVisible, onConfirm, onCancel }) {
  const { members } = useSelector((state) => state.searchedList);
  const dispatch = useDispatch();
  const screenWidth = Dimensions.get('window').width;
  const [searchText, setSearchText] = useState('');
  const searchMemberByName = (value) => {
    setSearchText(value);
    dispatch(searchMember(value));
  };


  return (
    <Overlay
      height={70}
      width={screenWidth}
      overlayStyle={{ position: 'absolute', top: 0, padding: 0 }}
      isVisible={isVisible}
    >
      <View>
        <SearchBar
          placeholder="Search member"
          platform="ios"
          onChangeText={(value) => searchMemberByName(value)}
          value={searchText}
          autoCapitalize="none"
          containerStyle={{ width: screenWidth, marginTop: (Platform.OS === 'ios' ? 35 : 0) }}
          onCancel={onCancel}
        />
        <ScrollView style={{ zIndex: 999, height: 500 }}>
          {members.map((item, idx) => <ListItem key={`ListGroup:${idx + 1}`} title={item.username} onPress={() => onConfirm(item)} bottomDivider />)}
        </ScrollView>
      </View>
    </Overlay>
  );
}

AddMemberOverlay.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};
