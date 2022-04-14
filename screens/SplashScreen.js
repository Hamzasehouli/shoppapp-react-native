import React from 'react';
import {View, Text, StyleSheet, TouchableNativeFeedback} from 'react-native';
import Colors from '../constants/Colors';
import BaseButton from '../components/BaseButton';

const SplashScreen = function () {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>splash screen</Text>
      <BaseButton title="Get started"></BaseButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.primaryColor,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {color: 'white'},
});

export default SplashScreen;
