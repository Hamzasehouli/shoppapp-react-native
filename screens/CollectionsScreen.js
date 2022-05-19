import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
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

const CollectionsScreen = function (props) {
  const language = useSelector(state => state.language.language);
  const collectionsData = [
    {
      id: 'cl1',
      title: language === 'English' ? 'Men' : 'French' ? 'Hommes' : 'rijal',
    },
    {id: 'cl2', title: 'Women'},
    //   {id: 'cl3', title: 'Kids'},
    //   {id: 'cl4', title: 'Baby'},
    {id: 'cl5', title: 'Sale'},
  ];
  const renderItemHandler = function (item) {
    return (
      <TouchableOpacity
        style={{marginBottom: 20}}
        onPress={() => {
          if (item.item.title === 'Sale') {
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
          size={30}>
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
      <Blue width={200} height={200} style={{marginBottom: 40}}></Blue>
      <FlatList data={collectionsData} renderItem={renderItemHandler} />
      <ImageBackground
        resizeMode="cover"
        style={{
          width: '100%',
          height: 200,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        source={{
          uri: 'https://images.unsplash.com/photo-1543076447-215ad9ba6923?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8amFja2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 40,
            textAlign: 'center',
            width: '50%',
          }}>
          Up to -50% off sales
        </Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    flexDirection: 'column',
  },
});

export default CollectionsScreen;
