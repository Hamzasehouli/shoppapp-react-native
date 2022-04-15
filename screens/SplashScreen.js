import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Colors from '../constants/Colors';
import BaseButton from '../components/BaseButton';
import BaseText from '../components/BaseText';
import Catalog from '../assets/illustrations/Catalog.svg';

const SplashScreen = function ({navigation}) {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>shoppy</Text>
      <Catalog width={250} height={250} />
      <BaseButton
        onPress={() => navigation.replace('Home')}
        // style={{marginTop: 3}}
        title="Get Started"
        type="ghost"></BaseButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.primaryColor,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 40,
  },
  text: {
    color: 'white',
    fontSize: 40,
    fontFamily: 'Roboto-Medium',
  },
});

export default SplashScreen;
