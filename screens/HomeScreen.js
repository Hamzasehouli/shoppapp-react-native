import React from 'react';
import BaseText from '../components/BaseText';
import SaleScreen from './SaleScreen';
import Colors from '../constants/Colors';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {
  MenCategories as Men,
  WomenCategories as Women,
  BabyCataegories as Baby,
  KidsCataegories as Kids,
  SaleCataegories as Sale,
} from '../data/data';

const HomeScreen = function ({navigation, route}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params.collection + ' ' + 'Collection',
    });
  }, [navigation]);
  const collection = route.params.collection;
  const isSale = collection === 'Sale' ? true : false;

  const categories = collection === 'Men' ? Men : 'Women' ? Women : [];
  const renderItemHandler = function (item) {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate({
            name: 'ApparelScreen',
            params: {title: item.item.title},
          })
        }
        style={styles.container}>
        <ImageBackground
          resizeMode="cover"
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
          }}
          source={{
            uri: item.item.imageUrl,
          }}>
          <BaseText
            style={{
              fontWeight: '700',
              margin: 10,
              backgroundColor: 'rgba(0,0,0,.6)',
              padding: 5,
              borderRadius: 10,
            }}
            color="white"
            size={20}>
            <Text style={{fontWeight: '400'}}>{item.item.title}</Text>
          </BaseText>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  if (isSale) {
    return <SaleScreen />;
  }
  return (
    <View style={styles.screen}>
      <FlatList
        data={categories}
        renderItem={renderItemHandler}
        numColumns={2}></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  container: {
    width: 150,
    height: 160,
    borderRadius: 20,
    // backgroundColor: 'red',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    margin: 15,
    shadowColor: 'black',
    shadowOpacity: 0.66,
    shadowOffset: {width: 20, height: 30},
    shadowRadius: 10,
    elevation: 10,
    // backgroundColor: 'white',
    overflow: 'hidden',
  },
});

export default HomeScreen;
