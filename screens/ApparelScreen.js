import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {useSelectore, useDispatch} from 'react-redux';
import {SNEAKERS, BAGS} from '../data/data';
import {JEANS} from '../data/men/JEANS.js';
import {CAPS} from '../data/men/CAPS.js';
import {PULLOVER} from '../data/men/PULLOVER.js';
import {SHIRTS} from '../data/men/SHIRTS.js';
import {JACKETS} from '../data/men/JACKETS.js';
import {SUITS} from '../data/men/SUITS.js';
import {SHOES} from '../data/men/SHOES.js';
import {SHOESWOMEN} from '../data/women/SHOESWOMEN.js';
import {PULLOVERWOMEN} from '../data/women/PULLOVERWOMEN.js';
import {HATSWOMEN} from '../data/women/HATSWOMEN.js';
import {JEANSWOMEN} from '../data/women/JEANSWOMEN.js';
import {DRESSESWOMEN} from '../data/women/DRESSESWOMEN.js';
import {BAGSWOMEN} from '../data/women/BAGSWOMEN.js';
import {SPORTWEAR} from '../data/men/SPORTWEAR.js';
import {JACKETSWOMEN} from '../data/women/JACKETSWOMEN';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors';
import BaseText from '../components/BaseText';
import {favoriteToggler} from '../store/actions/favoritesAction';

const Apparel = function (props) {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  const favoriteHandler = function (apparel) {
    dispatch(favoriteToggler(apparel));
  };
  useEffect(() => {
    switch (props.route.params.title) {
      case 'Sneakers men':
        setData(SNEAKERS);
        break;
      case 'Bags men':
        setData(BAGS);
        break;
      case 'Jeans men':
        setData(JEANS);
        break;
      case 'Cap men':
        setData(CAPS);
        break;
      case 'Pullover men':
        setData(PULLOVER);
        break;
      case 'Shirts men':
        setData(SHIRTS);
        break;
      case 'Jackets men':
        setData(JACKETS);
        break;
      case 'Suit men':
        setData(SUITS);
        break;
      case 'Sportwear men':
        setData(SPORTWEAR);
        break;
      case 'Shoes men':
        setData(SHOES);
        break;
      case 'Shoes women':
        setData(SHOESWOMEN);
        break;
      case 'Bags women':
        setData(BAGSWOMEN);
        break;
      case 'Jeans women':
        setData(JEANSWOMEN);
        break;
      case 'Hats women':
        setData(HATSWOMEN);
        break;
      case 'Pullover women':
        setData(PULLOVERWOMEN);
        break;
      case 'Dress women':
        setData(DRESSESWOMEN);
        break;
      case 'Jackets women':
        setData(JACKETSWOMEN);
        break;

      default:
        setData([]);
        break;
    }
    props.navigation.setOptions({
      title:
        props.route.params.title.split(' ')[0] +
        ' ' +
        props.route.params.collection,
    });
  }, []);
  const renderItemHandler = function (item) {
    return (
      <TouchableOpacity
        style={styles.box}
        onPress={() => props.navigation.push('DetailsScreen')}>
        <ImageBackground
          source={{uri: item.item.imageUrl}}
          resizeMode="cover"
          style={styles.imageBackground}>
          <TouchableOpacity
            onPress={favoriteHandler.bind(this, item.item)}
            style={styles.favorite}>
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
