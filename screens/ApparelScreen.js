import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {SNEAKERS, BAGS} from '../data/data';
import {JEANS} from '../data/JEANS.js';
import {CAPS} from '../data/CAPS.js';
import {PULLOVER} from '../data/PULLOVER.js';
import {SHIRTS} from '../data/SHIRTS.js';
import {JACKETS} from '../data/JACKETS.js';
import {SUITS} from '../data/SUITS.js';
import {SHOES} from '../data/SHOES.js';
import {SPORTWEAR} from '../data/SPORTWEAR.js';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors';
import BaseText from '../components/BaseText';

const Apparel = function (props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    switch (props.route.params.title) {
      case 'Sneakers':
        setData(SNEAKERS);
        break;
      case 'Bags':
        setData(BAGS);
        break;
      case 'Jeans':
        setData(JEANS);
        break;
      case 'Cap':
        setData(CAPS);
        break;
      case 'Pullover':
        setData(PULLOVER);
        break;
      case 'Shirts':
        setData(SHIRTS);
        break;
      case 'Jackets':
        setData(JACKETS);
        break;
      case 'Suit':
        setData(SUITS);
        break;
      case 'Sportwear':
        setData(SPORTWEAR);
        break;
      case 'Shoes':
        setData(SHOES);
        break;

      default:
        setData([]);
        break;
    }
    props.navigation.setOptions({
      title: props.route.params.title,
    });
  }, []);
  const renderItemHandler = function (item) {
    return (
      <TouchableOpacity style={styles.box}>
        <ImageBackground
          source={{uri: item.item.imageUrl}}
          resizeMode="cover"
          style={styles.imageBackground}>
          <TouchableOpacity style={styles.favorite}>
            <Icon
              size={25}
              color={Colors.primaryColor}
              name="ios-heart-outline"></Icon>
          </TouchableOpacity>
        </ImageBackground>
        <View style={styles.details}>
          <BaseText>{item.item.title}</BaseText>
          <BaseText color={Colors.primaryColor} style={{fontWeight: '700'}}>
            ${item.item.price}
          </BaseText>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.screen}>
      <FlatList
        numColumns={2}
        data={data}
        renderItem={renderItemHandler}></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'white',
    flex: 1,
    height: '100%',
    paddingLeft: 10,
    paddingRight: 10,
  },
  box: {
    width: '50%',
    height: 300,
    position: 'relative',
    marginBottom: 40,
    marginRight: 5,
  },
  imageBackground: {
    position: 'relative',
    flex: 1,
  },
  favorite: {
    position: 'absolute',
    right: 10,
    top: 10,
    backgroundColor: 'white',
    borderRadius: 10000000,
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
  },
  details: {
    padding: 5,
    height: '20%',
  },
});

export default Apparel;
