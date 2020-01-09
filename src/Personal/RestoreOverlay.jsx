import React from 'react';
import { View, Text } from 'react-native';
import { Button, Overlay } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import PropTypes from 'prop-types';
import styles from '../Common/themeStyle';
import themeColor from '../Common/Color';

export default function RestoreOverlay({ isVisible, onConfirm, onCancel }) {
  return (
    <Overlay height={220} isVisible={isVisible} overlayStyle={{ padding: 0 }}>
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
        <LinearGradient
          colors={themeColor.gradientColor.green}
          start={[0.1, 0.9]}
          end={[0.9, 0.1]}
          style={{
            paddingTop: 35,
            paddingBottom: 35,
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          <Text style={styles.overlayText}>Please make sure you have backup all your transactions</Text>
        </LinearGradient>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <View style={[styles.greenLargeBtn, { marginTop: 0, marginBottom: 30 }]}>
            <LinearGradient
              colors={themeColor.gradientColor.green}
              start={[0.1, 0.9]}
              end={[0.9, 0.1]}
              style={styles.overlayBtn}
            >
              <Button title="Confirm" type="clear" onPress={() => onConfirm()} titleStyle={{ color: 'white' }} />
            </LinearGradient>
          </View>
          <View style={[styles.grayBtnShadow, { marginBottom: 30 }]}>
            <LinearGradient
              colors={['#ffff', '#ffff']}
              style={styles.overlayBtn}
            >
              <Button title="Cancel" type="clear" onPress={() => onCancel()} titleStyle={{ color: 'grey' }} />
            </LinearGradient>
          </View>
        </View>
      </View>
    </Overlay>
  );
}

RestoreOverlay.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};
