import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import BaseText from '../components/BaseText';

const collectionsData = [
  {id: 'cl1', title: 'Men Sales'},
  {id: 'cl2', title: 'Women Sales'},
];
const SaleScreen = function () {
  const renderItemHandler = function (item) {
    return (
      <TouchableOpacity
        style={{marginBottom: 20}}
        onPress={() =>
          props.navigation.navigate({
            name: 'Categories',
            params: {collection: item.item.title},
          })
        }>
        <BaseText
          style={{
            textAlign: 'center',
            fontWeight: '700',
            fontFamily: 'Roboto-Bold',
          }}
          color="black"
          size={30}>
          {item.item.title}
        </BaseText>
      </TouchableOpacity>
    );
  };
  return (
    <ImageBackground
      resizeMode="cover"
      style={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      source={{
        uri: 'https://images.unsplash.com/photo-1543076447-215ad9ba6923?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8amFja2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
      }}>
      <View style={styles.screen}>
        <FlatList data={collectionsData} renderItem={renderItemHandler} />
      </View>
    </ImageBackground>
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
  },
});

export default SaleScreen;
