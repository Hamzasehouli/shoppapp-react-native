import {NavigationContainer} from '@react-navigation/native';
import React, {useState, useLayoutEffect} from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from 'react-native';
import BaseScreen from '../components/BaseScreen';
import BaseText from '../components/BaseText';
import Colors from '../constants/Colors';
import Blue from '../assets/images/Blue.svg';
import {useSelector} from 'react-redux';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const CollectionsScreen = function (props) {
  const Rawlanguage = useSelector(state => state.language.language);

  const [language, setLanguage] = useState(Rawlanguage);

  const collectionsData = [
    {
      id: 'cl1',
      title:
        language === 'Arabic'
          ? 'رجال'
          : language === 'French'
          ? 'Hommes'
          : language === 'English'
          ? 'Men'
          : '',
    },
    {
      id: 'cl2',
      title:
        language === 'Arabic'
          ? 'نساء'
          : language === 'French'
          ? 'Femmes'
          : language === 'English'
          ? 'Women'
          : '',
    },
    {
      id: 'cl3',
      title:
        language === 'Arabic'
          ? 'التخفيضات'
          : language === 'French'
          ? 'Soldes'
          : language === 'English'
          ? 'Sales'
          : '',
    },
  ];

  const renderItemHandler = function (item) {
    return (
      <TouchableOpacity
        style={{marginBottom: hp(2)}}
        onPress={() => {
          if (
            item.item.title === 'Sales' ||
            item.item.title === 'Soldes' ||
            item.item.title === 'التخفيضات'
          ) {
            props.navigation.navigate({
              name: 'Sale',
            });
          } else {
            props.navigation.navigate({
              name: 'Categories',
              params: {collection: item.item.title},
            });
          }
        }}>
        <StatusBar
          animated={true}
          backgroundColor="white"
          barStyle="dark-content"
        />
        <BaseText
          style={{
            textAlign: 'center',
            fontWeight: '700',
            fontFamily: 'Roboto-Bold',
          }}
          color={Colors.primaryColor}
          size={hp(5)}>
          {item.item.title}
        </BaseText>
      </TouchableOpacity>
    );
  };
  return (
    // <ImageBackground
    //   resizeMode="cover"
    //   style={{
    //     width: '100%',
    //     height: '100%',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //   }}
    //   source={{
    //     uri: 'https://images.unsplash.com/photo-1543076447-215ad9ba6923?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8amFja2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
    //   }}>
    // </ImageBackground>
    <View style={styles.screen}>
      <Blue width={wp(40)} height={hp(20)} style={{marginBottom: hp(2)}}></Blue>
      <FlatList data={collectionsData} renderItem={renderItemHandler} />
      <ImageBackground
        resizeMode="cover"
        style={{
          width: wp(100),
          height: hp(45),
          justifyContent: 'center',
          alignItems: 'center',
        }}
        source={{
          uri: 'https://images.unsplash.com/photo-1543076447-215ad9ba6923?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8amFja2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: hp(4.5),
            textAlign: 'center',
            width: wp('60%'),
            height: '50%',
          }}>
          {language === 'English'
            ? 'Up to -50% off sales'
            : language === 'French'
            ? "Jusqu'à -50% sur les soldes"
            : 'خصم يصل إلى -50٪ على المبيعات'}
        </Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'center',
    width: wp(100),
    height: hp(100),
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    flexDirection: 'column',
  },
});

export default CollectionsScreen;
