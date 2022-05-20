import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import Blue from '../assets/images/Blue.svg';
import BaseButton from '../components/BaseButton';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors';

import {Picker} from '@react-native-picker/picker';
const data = [
  {id: 'b1', title: 'Change region', nav: ''},
  {id: 'b2', title: 'Clear cache', nav: ''},
  {id: 'b3', title: 'Change language', nav: ''},
];

const SettingsScreen = function (props) {
  const language = useSelector(state => state.language);
  const [selectedLanguage, setSelectedLanguage] = useState(language);
  const [selectedRegion, setSelectedRegion] = useState('US');
  const dispatch = useDispatch();
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
          <Picker
            style={{backgroundColor: 'white', width: 180}}
            selectedValue={selectedRegion}
            onValueChange={(itemValue, itemIndex) => {
              setSelectedRegion(itemValue);
              dispatch({type: 'region', region: itemValue});
            }}>
            <Picker.Item label={'Morocco'} value={'Morocco'} />
            <Picker.Item label={'US'} value={'US'} />
            <Picker.Item label={'UK'} value={'UK'} />
          </Picker>
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
          <Picker
            style={{backgroundColor: 'white', width: 180}}
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) => {
              setSelectedLanguage(itemValue);
              dispatch({type: 'language', language: itemValue});
              props.navigation.navigate({name: 'Splash'});
            }}>
            <Picker.Item
              enabled={false}
              label={'Select a language'}
              value={''}
            />
            <Picker.Item label={'English'} value={'English'} />
            <Picker.Item label={'Arabic'} value={'Arabic'} />
            <Picker.Item label={'French'} value={'French'} />
          </Picker>
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
