import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import styles from '../Common/themeStyle';

export default function Personal() {
  const [switchValue, setSwitchValue] = useState(false);

  return (
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
            subtitle="you can dit your information about your email address, phone number"
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
  );
}
