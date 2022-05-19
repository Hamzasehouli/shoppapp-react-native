import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {BAGS} from '../data/men/BAGS.js';
import {SNEAKERS} from '../data/men/SNEAKERS.js';
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
import {CommonActions} from '@react-navigation/native';

const Apparel = function (props) {
  const [data, setData] = useState([]);
  const favs = useSelector(state => state.favorites.favorites);
  const [favorites, setFavorites] = useState(favs);
  const dispatch = useDispatch();

  const favoriteHandler = function (apparel) {
    if (favs.includes(apparel)) {
      dispatch({type: 'removeFavorite', apparel});
    } else {
      dispatch(favoriteToggler(apparel));
    }
    setFavorites(favs);

    props.navigation.setParams({apparel});
  };
  useEffect(() => {
    switch (props.route.params.title) {
      case 'Sneakers men':
        if (props.route.params.saleApparel) {
          setData(SNEAKERS.filter(i => i.sale));
          break;
        }
        setData(SNEAKERS);
        break;
      case 'Bags men':
        if (props.route.params.saleApparel) {
          setData(BAGS.filter(i => i.sale));
          break;
        }
        setData(BAGS);
        break;
      case 'Jeans men':
        if (props.route.params.saleApparel) {
          setData(JEANS.filter(i => i.sale));
          break;
        }
        setData(JEANS);
        break;
      case 'Cap men':
        if (props.route.params.saleApparel) {
          setData(CAPS.filter(i => i.sale));
          break;
        }
        setData(CAPS);
        break;
      case 'Pullover men':
        if (props.route.params.saleApparel) {
          setData(PULLOVER.filter(i => i.sale));
          break;
        }
        setData(PULLOVER);
        break;
      case 'Shirts men':
        if (props.route.params.saleApparel) {
          setData(SHIRTS.filter(i => i.sale));
          break;
        }
        setData(SHIRTS);
        break;
      case 'Jackets men':
        if (props.route.params.saleApparel) {
          setData(JACKETS.filter(i => i.sale));
          break;
        }
        setData(JACKETS);
        break;
      case 'Suit men':
        if (props.route.params.saleApparel) {
          setData(SUITS.filter(i => i.sale));
          break;
        }
        setData(SUITS);
        break;
      case 'Sportwear men':
        if (props.route.params.saleApparel) {
          setData(SPORTWEAR.filter(i => i.sale));
          break;
        }
        setData(SPORTWEAR);
        break;
      case 'Shoes men':
        if (props.route.params.saleApparel) {
          setData(SHOES.filter(i => i.sale));
          break;
        }
        setData(SHOES);
        break;
      case 'Shoes women':
        if (props.route.params.saleApparel) {
          setData(SHOESWOMEN.filter(i => i.sale));
          break;
        }
        setData(SHOESWOMEN);
        break;
      case 'Bags women':
        if (props.route.params.saleApparel) {
          setData(BAGSWOMEN.filter(i => i.sale));
          break;
        }
        setData(BAGSWOMEN);
        break;
      case 'Jeans women':
        if (props.route.params.saleApparel) {
          setData(JEANSWOMEN.filter(i => i.sale));
          break;
        }
        setData(JEANSWOMEN);
        break;
      case 'Hats women':
        if (props.route.params.saleApparel) {
          setData(HATSWOMEN.filter(i => i.sale));
          break;
        }
        setData(HATSWOMEN);
        break;
      case 'Pullover women':
        if (props.route.params.saleApparel) {
          setData(PULLOVERWOMEN.filter(i => i.sale));
          break;
        }
        setData(PULLOVERWOMEN);
        break;
      case 'Dress women':
        if (props.route.params.saleApparel) {
          setData(DRESSESWOMEN.filter(i => i.sale));
          break;
        }
        setData(DRESSESWOMEN);
        break;
      case 'Jackets women':
        if (props.route.params.saleApparel) {
          setData(JACKETSWOMEN.filter(i => i.sale));
          break;
        }
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
        onPress={() =>
          props.navigation.navigate({
            name: 'DetailsScreen',
            params: {apparel: item.item},
          })
        }>
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
              name={
                favorites.find(d => d.id === item.item.id)
                  ? 'ios-heart'
                  : 'ios-heart-outline'
              }></Icon>
          </TouchableOpacity>
        </ImageBackground>
        <View style={styles.details}>
          <BaseText>{item.item.title}</BaseText>
          <BaseText
            color={Colors.primaryColor}
            size={item.item.sale ? 15 : 18}
            style={{fontWeight: '700'}}>
            <Text
              style={
                item.item.sale
                  ? {
                      textDecorationLine: 'line-through',
                      textDecorationStyle: 'solid',
                    }
                  : {}
              }>
              ${item.item.price}
            </Text>
          </BaseText>
          <BaseText color={'red'} style={{fontWeight: '700'}} size={18}>
            {item.item.discountPrice && `$${item.item.discountPrice}`}
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
