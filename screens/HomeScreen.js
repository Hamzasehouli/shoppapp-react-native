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
import {cataegories} from '../data/data';
const HomeScreen = function () {
  const renderItemHandler = function (item) {
    return (
      <TouchableOpacity style={styles.container}>
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
              backgroundColor: 'black',
              color: 'white',
              padding: 5,
              borderRadius: 10,
            }}
            color="white"
            size={25}>
            <Text>{item.item.title}</Text>
          </BaseText>
        </ImageBackground>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.screen}>
      <FlatList
        data={cataegories}
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
