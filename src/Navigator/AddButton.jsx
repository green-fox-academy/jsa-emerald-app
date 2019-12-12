import React from 'react';
import {
  View, StyleSheet, TouchableHighlight, Animated,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#5C6BC0',
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 36,
    position: 'absolute',
    top: -25,
    shadowColor: '#5C6BC0',
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { height: 10 },
    borderWidth: 3,
    borderColor: '#FFF',
  },
});

export default function AddButton() {
  return (
    <View style={{ position: 'absolute', alignItems: 'center' }}>
      <Animated.View style={[styles.button]}>
        <TouchableHighlight underlayColor="#5C6BC0">
          <Animated.View>
            <FontAwesome5 name="plus" size={20} color="#FFF" />
          </Animated.View>
        </TouchableHighlight>
      </Animated.View>
    </View>
  );
}
