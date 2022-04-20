import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Colors from '../constants/Colors';
import BaseButton from '../components/BaseButton';
import BaseText from '../components/BaseText';
import Catalog from '../assets/illustrations/online-shopping.svg';
import Blue from '../assets/images/Blue.svg';

const SplashScreen = function ({navigation}) {
  return (
    <View style={styles.screen}>
      <Blue
        style={{padding: 10, marginBottom: -70}}
        height={150}
        fill={'red'}></Blue>
      <Catalog width={280} height={280} />
      <View>
        <Text
          style={{
            fontSize: 18,
            fontFamily: 'Roboto-Black',
            fontWeight: '700',
            textAlign: 'center',
          }}>
          Sustainable shopping choices
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontFamily: 'Roboto-Black',
          }}>
          Consciuous picks for a fashion future
        </Text>
      </View>
      <BaseButton
        width={'65%'}
        onPress={() => navigation.replace('MainStackScreen')}
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
