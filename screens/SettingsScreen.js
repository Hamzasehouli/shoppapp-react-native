import React from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';

import Blue from '../assets/images/Blue.svg';
import BaseButton from '../components/BaseButton';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors';

const data = [
  {id: 'b1', title: 'Change region', nav: ''},
  {id: 'b2', title: 'Clear cache', nav: ''},
  {id: 'b3', title: 'Change language', nav: ''},
];

const SettingsScreen = function (props) {
  // const renderItemHandler = function (item) {
  //   return (
  //     <View
  //       style={{
  //         flex: 1,
  //         justifyContent: 'flex-start',
  //         alignItems: 'center',
  //         marginBottom: 10,
  //         flexDirection: 'row',
  //       }}>
  //       <Icon
  //         style={{marginRight: 8}}
  //         size={18}
  //         color={Colors.primaryColor}
  //         name="ios-trash-outline"
  //       />
  //       <BaseButton type="ghost" title={item.item.title}></BaseButton>
  //     </View>
  //   );
  // };

  return (
    <View style={styles.screen}>
      <Blue width={100} height={100} style={{marginBottom: 14}}></Blue>
      <View style={{height: 100, marginTop: 40}}>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginBottom: 10,
            flexDirection: 'row',
          }}>
          <Icon
            style={{marginRight: 8}}
            size={18}
            color={Colors.primaryColor}
            name="md-globe"
          />
          <BaseButton type="ghost" title="Change the region"></BaseButton>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginBottom: 10,
            flexDirection: 'row',
          }}>
          <Icon
            style={{marginRight: 8}}
            size={18}
            color={Colors.primaryColor}
            name="ios-phone-portrait-outline"
          />
          <BaseButton type="ghost" title="Change the language"></BaseButton>
        </View>
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
