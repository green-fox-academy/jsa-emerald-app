import React, { useState, useEffect } from 'react';
import { View, Text, Alert } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { requestBackup } from './actionCreator';
import MainHeader from '../Common/MainHeader';
import styles from '../Common/themeStyle';

export default function Personal() {
  const [switchValue, setSwitchValue] = useState(false);
  const dispatch = useDispatch();
  const { transactions } = useSelector((state) => state.transactions);
  const backupState = useSelector((state) => state.backupState);

  useEffect(() => {
    if (switchValue) {
      dispatch(requestBackup(transactions));
      if (backupState.stateCode === 200) {
        Alert.alert('Backup successfully!');
      } else {
        Alert.alert("There's something wrong, please try again later");
      }
    }
  }, [switchValue]);

  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <MainHeader title="Profile" />
      <View style={[styles.deviceBody, { flex: 1, flexDirection: 'column' }]}>
        <View style={[styles.card, { padding: 0 }]}>
          <View style={{
            alignItems: 'center', backgroundColor: '#f078a4', borderTopLeftRadius: 6, borderTopRightRadius: 6, paddingVertical: 30,
          }}
          >
            <Avatar rounded size={60} icon={{ name: 'user', type: 'font-awesome' }} />
            <Text style={[styles.secondaryHeading, { color: 'white' }]}>Johnathan Doe</Text>
            <Text style={{ color: 'white' }}>Email</Text>
          </View>
          <View style={{ paddingTop: 15, paddingBottom: 10, paddingHorizontal: 10 }}>
            <Text style={[styles.secondaryHeading, { color: 'grey', marginLeft: 12, marginBottom: 5 }]}>General</Text>
            <ListItem
              title="Personal details"
              subtitle="you can edit your information about your email address, phone number"
              subtitleStyle={{ color: 'grey' }}
              bottomDivider
            />
            <ListItem
              title="Backup data"
              subtitle="Login to backup data"
              subtitleStyle={{ color: 'grey' }}
              switch={{
                disabled: false, trackColor: { true: '#5C6BC0' }, value: switchValue, onValueChange: () => setSwitchValue(!switchValue),
              }}
              bottomDivider
            />
            <ListItem
              title="Change Password"
              bottomDivider
            />
            <ListItem title="Categories" subtitle="Add or remove categories" subtitleStyle={{ color: 'grey' }} />
          </View>
        </View>
      </View>
    </View>
  );
}
