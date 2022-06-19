import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useLayoutEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import BaseText from '../components/BaseText';
import BaseButton from '../components/BaseButton';
import Colors from '../constants/Colors';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect, useState} from 'react';
import currencyConverter from '../converters/currencyConverter';
import regionChecker from '../converters/regionChecker';

const CartScreen = function (props) {
  const auth = useSelector(state => state.auth);
  const [data, setData] = useState([]);
  useLayoutEffect(() => {
    (async function () {
      const res = await fetch(
        `https://shoppyapp-backend.herokuapp.com/api/v1/purchase/${auth.email}`,
      );
      const data = await res.json();

      setData(data.data.purchases);
    })();
  }, []);

  const isLoggedin = useSelector(state => state.auth.isLoggedin);

  const renderItemHandler = function (item) {
    return (
      <View style={styles.box}>
        <ImageBackground
          source={{uri: item.item.image}}
          resizeMode="cover"
          style={styles.imageBackground}></ImageBackground>
        <View style={styles.details}>
          <View>
            <BaseText>{item.item.title}</BaseText>
            <BaseText color={Colors.primaryColor} style={{fontWeight: '700'}}>
              {`${
                item.item.currency === 'gbp'
                  ? '£'
                  : item.item.currency === 'mad'
                  ? 'MAD'
                  : '$'
              } ` + `${item.item.price}`}
            </BaseText>
            <BaseText size={14} color={'grey'}>
              Size: {item.item.size}
            </BaseText>
            <BaseText size={14} color={'grey'}>
              Date:{' '}
              {`${new Date(item.item.added_at).getDate()}/${
                new Date(item.item.added_at).getMonth() + 1
              }/${new Date(item.item.added_at).getFullYear()}`}
            </BaseText>
          </View>

          {/* <View
            onPress={cartHandler.bind(this, item.item)}
            style={styles.favorite}>
            <Icon
              size={25}
              color={Colors.primaryColor}
              name="ios-trash-outline"></Icon>
          </View> */}
        </View>
      </View>
    );
  };

  if (data.length <= 0) {
    return (
      <View
        style={{
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}>
        <Text style={{fontSize: 20}}>
          {props.language.language === 'Arabic'
            ? 'لا توجد عناصر في عربة التسوق الخاصة بك حتى الآن🛒'
            : props.language.language === 'French'
            ? 'Aucun article dans votre panier pour le moment 🛒'
            : 'You have no purchases yet 🛒'}
        </Text>
      </View>
    );
  }

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
    // paddingLeft: 10,
    // paddingRight: 10,
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
    width: '100%',
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

export default CartScreen;
