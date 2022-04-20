import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';

import Blue from '../assets/images/Blue.svg';
import BaseButton from '../components/BaseButton';

const data = [
  {id: 'b1', title: 'Change region', nav: ''},
  {id: 'b2', title: 'Clear cache', nav: ''},
  {id: 'b3', title: 'Change language', nav: ''},
];

const SettingsScreen = function (props) {
  const renderItemHandler = function (item) {
    return <BaseButton type="ghost" title={item.item.title}></BaseButton>;
  };
  return (
    <View style={styles.screen}>
      <Blue width={100} height={100} style={{marginBottom: 14}}></Blue>
      <View style={{flexDirection: 'column', width: '70%'}}>
        <FlatList data={data} renderItem={renderItemHandler}></FlatList>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    flexDirection: 'column',
  },
});

export default SettingsScreen;
