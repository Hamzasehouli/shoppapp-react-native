import React from 'react';
import BaseText from '../components/BaseText';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  MenCategories as Men,
  WomenCategories as Women,
  BabyCataegories as Baby,
  KidsCataegories as Kids,
  SaleCataegories as Sale,
} from '../data/data';
const HomeScreen = function ({navigation, route}) {
  const collection = route.params.collection;
  console.log(Men);

  const categories =
    collection === 'Men' ? Men : 'Women' ? Women : 'Sale' ? Sale : [];
  const renderItemHandler = function (item) {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate({name: 'dd', params: {}})}
        style={styles.container}>
        <ImageBackground
          resizeMode="cover"
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'flex-end',
            alignItems: 'flex-start',
          }}
          source={{
            uri: item.item.imageUrl,
          }}>
          <BaseText
            style={{
              fontWeight: '700',
              margin: 10,
              backgroundColor: '#999',
              color: 'white',
              padding: 5,
              borderRadius: 10,
              opacity: 0.7,
            }}
            color="white"
            size={25}>
            <Text style={{opacity: 0.9}}>{item.item.title}</Text>
          </BaseText>
        </ImageBackground>
      </TouchableOpacity>
    );
  };
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
    width: 160,
    height: 160,
    borderRadius: 20,
    backgroundColor: 'white',
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
