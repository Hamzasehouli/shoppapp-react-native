import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View, FlatList, Text, StyleSheet, TouchableOpacity} from 'react-native';
import BaseScreen from '../components/BaseScreen';
import BaseText from '../components/BaseText';

const collectionsData = [
  {id: 'cl1', title: 'Men'},
  {id: 'cl2', title: 'Women'},
  {id: 'cl3', title: 'Kids'},
  {id: 'cl4', title: 'Baby'},
  {id: 'cl5', title: 'Sale'},
];

const CollectionsScreen = function (props) {
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
          size={30}>
          {item.item.title}
        </BaseText>
      </TouchableOpacity>
    );
  };
  return (
    <BaseScreen>
      <View style={styles.screen}>
        <FlatList
          data={collectionsData}
          renderItem={renderItemHandler}></FlatList>
      </View>
    </BaseScreen>
  );
};

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default CollectionsScreen;
