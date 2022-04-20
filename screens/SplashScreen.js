import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Colors from '../constants/Colors';
import BaseButton from '../components/BaseButton';
import BaseText from '../components/BaseText';
import Catalog from '../assets/illustrations/online-shopping.svg';
import Logo from '../assets/images/Logo.svg';

const SplashScreen = function ({navigation}) {
  return (
    <View style={styles.screen}>
      <Logo
        style={{padding: 10, marginBottom: -70}}
        height={150}
        fill={'red'}></Logo>
      <Catalog width={280} height={280} />
      <BaseButton
        onPress={() => navigation.replace('MainStackScreen')}
        // style={{marginTop: 3}}
        title="Get Started"
        type="flat"></BaseButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 40,
    paddingTop: 50,
  },
  text: {
    color: 'white',
    fontSize: 35,
    textAlign: 'center',
    fontFamily: 'Roboto-Italic',
    fontWeight: '700',
    marginRight: 4,
  },
});

export default SplashScreen;
