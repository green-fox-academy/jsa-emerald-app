import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Avatar, ListItem, Tooltip } from 'react-native-elements';
import styles from '../Common/themeStyle';

export default function Personal() {
  const [switchValue, setSwitchValue] = useState(false);
  const toggleSwitch = (value) => {
    if (value) {
      setSwitchValue(false);
    } else {
      setSwitchValue(true);
    }
  };
  return (
    <View style={[styles.deviceBody, { flex: 1, flexDirection: 'column' }]}>
      <View style={[styles.card, { padding: 0 }]}>
        <View style={{
          alignItems: 'center', backgroundColor: '#f078a4', borderTopLeftRadius: 3, borderTopRightRadius: 3, padding: 20,
        }}
        >
          <Avatar rounded size={60} icon={{ name: 'user', type: 'font-awesome' }} />
          <Text>Personal Info</Text>
        </View>
        <View>
          <Text style={{ color: 'grey', fontWeight: '600', fontSize: 18 }}>General</Text>
          <ListItem
            title="Personal details"
            subtitle="you can dit your information about your email address, phone number"
            subtitleStyle={{ color: 'grey' }}
            bottomDivider
          />
          <ListItem
            title="Backup data"
            subtitle="Login to backup data"
            subtitleStyle={{ color: 'grey' }}
            switch={{
              disabled: false, trackColor: { true: '#5C6BC0' }, value: switchValue, onValueChange: () => toggleSwitch(switchValue),
            }}
          />
        </View>
      </View>
    </View>
  );
}
