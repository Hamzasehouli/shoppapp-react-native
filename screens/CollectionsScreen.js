import React from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';
import BaseText from '../components/BaseText';

const collectionsData = ['Men', 'Women', 'Kids', 'Sale', 'Baby'];

const CollectionsScreen = function (props) {
  const renderItemHandler = function (item) {
    return (
      <View style={styles.screen}>
        <BaseText>{item.item}</BaseText>
      </View>
    );
  };
  return (
    <FlatList data={collectionsData} renderItem={renderItemHandler}></FlatList>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
  },
});

export default CollectionsScreen;
