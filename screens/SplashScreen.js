import React, {useLayoutEffect, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Colors from '../constants/Colors';
import BaseButton from '../components/BaseButton';
import BaseText from '../components/BaseText';
// import Catalog from '../assets/illustrations/online-shopping.svg';
import Catalog from '../assets/illustrations/start-illus.svg';
import Blue from '../assets/images/Blue.svg';
import {StatusBar} from 'react-native';
import {useSelector} from 'react-redux';

const SplashScreen = function ({navigation}) {
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
          {title1}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontFamily: 'Roboto-Black',
          }}>
          {title2}
        </Text>
      </View>
      <BaseButton
        width={'65%'}
        onPress={() => navigation.replace('MainStackScreen')}
        title={btn}
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
