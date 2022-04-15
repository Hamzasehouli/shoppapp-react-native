import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Colors from '../constants/Colors';
import BaseButton from '../components/BaseButton';
import BaseText from '../components/BaseText';
import Catalog from '../assets/illustrations/Catalog.svg';

const SplashScreen = function ({navigation}) {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Shoppy</Text>
      {/*<Text style={styles.text}>Check our fancy bags collections</Text> */}
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
    paddingTop: 40,
  },
  text: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
    fontFamily: 'Roboto-Medium',
  },
});

export default SplashScreen;
