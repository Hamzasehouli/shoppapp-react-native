import React, {useLayoutEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, useWindowDimensions} from 'react-native';
import Colors from '../constants/Colors';
import BaseButton from '../components/BaseButton';
import BaseText from '../components/BaseText';
// import Catalog from '../assets/illustrations/online-shopping.svg';
import Catalog from '../assets/illustrations/start-illus.svg';
import Blue from '../assets/images/Blue.svg';
import {StatusBar} from 'react-native';
import {useSelector} from 'react-redux';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const SplashScreen = function ({navigation}) {
  const window = useWindowDimensions();
  console.log(window);
  const storeLanguage = useSelector(state => state.language);
  const [language, setLanguage] = useState(storeLanguage);
  const [title1, setTitle1] = useState('Sustainable shopping choices');
  const [title2, setTitle2] = useState('Consciuous picks for a fashion future');
  const [btn, setBtn] = useState('Get Started');

  useLayoutEffect(() => {
    if (language.language === 'Arabic') {
      setTitle1('خيارات التسوق المستدامة');
      setTitle2('اختيارات واعية لمستقبل الموضة');
      setBtn('ابدأ الآن');
    } else if (language.language === 'French') {
      setTitle1("Choix d'achats durables");
      setTitle2('Des choix conscients pour un avenir de la mode');
      setBtn('Commencer');
    } else {
      setTitle1('Sustainable shopping choices');
      setTitle2('Consciuous picks for a fashion future');
      setBtn('Get started');
    }
  }, [storeLanguage]);

  return (
    <View style={styles.screen}>
      <StatusBar
        animated={true}
        backgroundColor="white"
        barStyle="dark-content"
      />
      <Blue
        style={{padding: hp(10), marginBottom: wp(-20)}}
        height={hp(10)}
        fill={'red'}></Blue>
      <Catalog width={wp(66)} height={hp(50)} />
      <View>
        <Text
          style={{
            fontSize: hp(3),
            fontFamily: 'Roboto-Black',
            fontWeight: '700',
            textAlign: 'center',
          }}>
          {title1}
        </Text>
        <Text
          style={{
            fontSize: hp(3),
            fontFamily: 'Roboto-Black',
            width: wp(80),
            textAlign: 'center',
          }}>
          {title2}
        </Text>
      </View>
      <BaseButton
        fontSize={wp(6)}
        width={wp(60)}
        onPress={() => navigation.replace('MainStackScreen')}
        title={btn}
        type="flat"></BaseButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    width: wp(100),
    height: hp(80),
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: wp(4),
    paddingTop: wp(5),
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
