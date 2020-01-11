import React, { useState, useEffect } from 'react';
import {
  View, Text, ActivityIndicator, ScrollView,
} from 'react-native';
import {
  Avatar, ListItem, Button,
} from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';
import moment from 'moment';
import { useNavigation } from 'react-navigation-hooks';
import { requestBackup, requestRestore, logoutSuccessful } from './actionCreator';
import MainHeader from '../Common/MainHeader';
import fadeHex from '../Common/colorConvert';
import RestoreOverlay from './RestoreOverlay';
import ThemeSelection from './themeSelection/ThemeSelection';
import setThemeStyle from '../Common/theme/setThemeStyle';

export default function Personal() {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  const backupState = useSelector((state) => state.backupState);
  const restoreState = useSelector((state) => state.restoreState);
  const user = useSelector((state) => state.user);
  const { themeMode } = useSelector((state) => state.theme);
  const styles = setThemeStyle(themeMode);

  const handleLogout = () => {
    // dispatch(requestBackup());
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
      <ScrollView style={[styles.deviceBody, { flex: 1, flexDirection: 'column' }]}>
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
            <Text
              style={[styles.secondaryHeading, { marginLeft: 12, marginBottom: 5 }]}>
              General
            </Text>
            <ListItem
              title="Personal details"
              titleStyle={styles.listHeading}
              subtitle="you can edit your information about your email address, phone number"
              subtitleStyle={{ color: 'grey' }}
              bottomDivider
              containerStyle={{ backgroundColor: 'rgba(255,0, 0, 0)' }}
            />
            <ListItem
              title="Backup data"
              titleStyle={styles.listHeading}
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
              containerStyle={{ backgroundColor: 'rgba(255,0, 0, 0)' }}
              bottomDivider
            />
            <ListItem
              title="Change password"
              titleStyle={styles.listHeading}
              containerStyle={{ backgroundColor: 'rgba(255,0, 0, 0)' }}
              bottomDivider
            />
            <ListItem
              title="Theme"
              titleStyle={styles.listHeading}
              rightElement={(
                <ThemeSelection />
              )}
              containerStyle={{ backgroundColor: 'rgba(255,0, 0, 0)' }}
            />
          </View>
        </View>
        <View style={styles.card}>
          <Text style={[styles.secondaryHeading, { marginLeft: 12, marginBottom: 5 }]}>Cloud Service</Text>
          <ListItem
            title="Restore data"
            titleStyle={styles.listHeading}
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
            bottomDivider
            containerStyle={{ backgroundColor: 'rgba(255,0, 0, 0)' }}
          />
          <ListItem
            title="Banking Sync"
            titleStyle={styles.listHeading}
            subtitle="Sync your transactions from bank"
            subtitleStyle={{ color: 'grey' }}
            onPress={() => navigate('OpenBanking')}
            containerStyle={{ backgroundColor: 'rgba(255,0, 0, 0)' }}
          />
          <Button title="Logout" color="#f194ff" onPress={handleLogout} />
        </View>
      </ScrollView>
    </View>
  );
}
