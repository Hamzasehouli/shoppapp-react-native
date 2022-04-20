import React from 'react';
import {View, StyleSheet} from 'react-native';
import Logo from '../assets/images/Logo';
import Colors from '../constants/Colors';

const StartScreen = function ({navigation}) {
  setTimeout(() => {
    navigation.replace('Splash');
  }, 3000);
  return (
    <View style={styles.screen}>
      <Logo width={200} height={200}></Logo>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});

export default StartScreen;
