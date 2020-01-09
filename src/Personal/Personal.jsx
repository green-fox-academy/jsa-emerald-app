import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import {
  Avatar, ListItem, Button,
} from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';
import moment from 'moment';
import { requestBackup, requestRestore, logoutSuccessful } from './actionCreator';
import MainHeader from '../Common/MainHeader';
import styles from '../Common/themeStyle';
import fadeHex from '../Common/colorConvert';
import RestoreOverlay from './RestoreOverlay';

export default function Personal() {
  const dispatch = useDispatch();
  const backupState = useSelector((state) => state.backupState);
  const restoreState = useSelector((state) => state.restoreState);
  const user = useSelector((state) => state.user);
  const handleLogout = () => {
    dispatch(logoutSuccessful());
  };

  const [message, setMessage] = useState('Click to back up data');
  const [restoreMsg, setRestoreMsg] = useState('Click to restore data');
  const [isOverlayVisible, setOverlayVisibility] = useState(false);

  useEffect(() => {
    if (backupState.error !== '') {
      setMessage(backupState.error);
    }
    if (backupState.lastBackupDate !== null) {
      setMessage(`Last update: ${moment.unix(backupState.lastBackupDate).format('YYYY-MM-DD HH:mm')}`);
    }
    if (restoreState.lastRestoreDate !== null) {
      setRestoreMsg(`Last restore: ${moment.unix(restoreState.lastRestoreDate).format('YYYY-MM-DD HH:mm')}`);
    }
    if (restoreState.error !== '') {
      setRestoreMsg(restoreState.error);
    }
  }, [
    backupState.lastBackupDate,
    backupState.error,
    restoreState.lastRestoreDate,
    restoreState.error]);

  const restoreData = () => {
    dispatch(requestRestore());
    setOverlayVisibility(false);
  };

  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <MainHeader title="Profile" />
      <View style={[styles.deviceBody, { flex: 1, flexDirection: 'column' }]}>
        <RestoreOverlay
          isVisible={isOverlayVisible}
          onConfirm={() => restoreData()}
          onCancel={() => setOverlayVisibility(false)}
        />
        <View style={[styles.card, { padding: 0, overflow: 'hidden' }]}>
          <LinearGradient
            colors={['#f078a4', fadeHex('#f078a4')]}
            start={[0.1, 0.9]}
            end={[0.9, 0.1]}
            style={{ borderTopLeftRadius: 6, borderTopRightRadius: 6 }}
          >
            <View style={{
              alignItems: 'center', paddingVertical: 30,
            }}
            >
              <Avatar size="large" rounded icon={{ name: 'person' }} />
              <Text style={[styles.secondaryHeading, { color: 'white' }]}>{user.username}</Text>
              <Text style={{ color: 'white' }}>{user.email}</Text>
            </View>
          </LinearGradient>
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
              subtitle={message}
              subtitleStyle={{ color: 'grey' }}
              rightElement={backupState.isInProgress ? <ActivityIndicator size="small" color="grey" />
                : (
                  <Button
                    title="Backup"
                    titleStyle={{ color: '#2fc899' }}
                    type="outline"
                    buttonStyle={{ borderColor: '#2fc899', borderRadius: 6 }}
                    onPress={() => dispatch(requestBackup())}
                  />
                )}
              bottomDivider
            />
            <ListItem
              title="Change password"
            />
          </View>
        </View>
        <View style={styles.card}>
          <Text style={[styles.secondaryHeading, { color: 'grey', marginLeft: 12, marginBottom: 5 }]}>Cloud Service</Text>
          <ListItem
            title="Restore data"
            subtitle={restoreMsg}
            subtitleStyle={{ color: 'grey' }}
            rightElement={restoreState.isInProgress ? <ActivityIndicator size="small" color="grey" />
              : (
                <Button
                  title="Restore"
                  titleStyle={{ color: '#2fc899' }}
                  type="outline"
                  buttonStyle={{ borderColor: '#2fc899', borderRadius: 6 }}
                  onPress={() => setOverlayVisibility(true)}
                />
              )}
          />
          <Button title="Logout" color="#f194ff" onPress={handleLogout} />
        </View>
      </View>
    </View>
  );
}
