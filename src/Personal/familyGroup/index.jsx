import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, ScrollView } from 'react-native';
import setThemeStyle from '../../Common/theme/setThemeStyle';
import MainHeader from '../../Common/MainHeader';
import FamilyCard from './FamilyCard';
import SubmitBtn from '../SubmitBtn';
import AddMemberOverlay from './AddMemberOverlay';
import {
  cancelMemberSearch, updateFamilyMember, getFamilyMemberList, confirmFamilyMember,
} from './actionCreator';

export default function FamilyPage() {
  const { themeMode } = useSelector((state) => state.theme);
  const { members } = useSelector((state) => state.familyList);

  const styles = setThemeStyle(themeMode);
  const [isOverlayVisible, setOverlayVisibility] = useState(false);
  const dispatch = useDispatch();
  const addMemberName = (value) => {
    const searchIndex = members.findIndex((item) => item.id === value.id);
    if (searchIndex === -1) {
      dispatch(confirmFamilyMember(value));
      dispatch(updateFamilyMember());
      // dispatch(getFamilyMemberList());
    }
    setOverlayVisibility(false);
  };

  const cancelSearch = () => {
    dispatch(cancelMemberSearch());
    setOverlayVisibility(false);
  };

  useEffect(() => {
    console.log(members);

  }, []);

  useEffect(() => {
    dispatch(getFamilyMemberList());
  }, ['']);

  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <AddMemberOverlay
        isVisible={isOverlayVisible}
        onConfirm={(value) => addMemberName(value)}
        onCancel={() => cancelSearch()}
      />
      <MainHeader title="My Family" />
      <View style={[styles.deviceBody, { flex: 1, flexDirection: 'column' }]}>
        <View style={{ marginHorizontal: 10, marginTop: 15 }}>
          <SubmitBtn title="Add Member" disabled={false} onPressBtn={() => setOverlayVisibility(true)} />
        </View>
        <ScrollView>
          {members.map((value, idx) => <FamilyCard key={`ListGroup:${idx + 1}`} username={value.username} note="Father" imgUrl={value.url ? value.url : 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'} />)}
        </ScrollView>
      </View>
    </View>
  );
}
