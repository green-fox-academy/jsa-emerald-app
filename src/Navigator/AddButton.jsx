import React from 'react';
import {
  View, StyleSheet, TouchableHighlight, Animated,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#7F58FF',
    alignItems: 'center',
    justifyContent: 'center',
    width: 72,
    height: 72,
    borderRadius: 36,
    position: 'absolute',
    top: -40,
    shadowColor: '#7F58FF',
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { height: 10 },
    borderWidth: 3,
    borderColor: '#FFF',
  },
});

export default function AddButton() {
  const buttonSize = new Animated.Value(1);

  const handlePress = () => {
    console.log('====================================');
    console.log(1111111111111);
    console.log('====================================');
    Animated.sequence([
      Animated.timing(buttonSize, {
        toValue: 0.70,
        duration: 300,
      }),
      Animated.timing(buttonSize, {
        toValue: 1,
      }),
    ]).start();
  };

  const sizeStyle = {
    transform: [{ scale: buttonSize }],
  };

  return (
    <View style={{ position: 'absolute', alignItems: 'center' }}>
      <Animated.View style={[styles.button, sizeStyle]}>
        <TouchableHighlight onPress={handlePress} underlayColor="#7F58FF">
          <Animated.View>
            <FontAwesome5 name="plus" size={20} color="#FFF" />
          </Animated.View>
        </TouchableHighlight>
      </Animated.View>
    </View>
  );
}
