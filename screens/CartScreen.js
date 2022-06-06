import React, {useLayoutEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  FlatList,
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
  const [region, setRegion] = useState(props.region.region);
  console.log(region);
  const dispatch = useDispatch();
  const [data, setData] = useState(props.cartData);
  const [totalPrice, setTotalPrice] = useState(
    data.reduce((a, v) => v.price + a, 0),
  );
  useLayoutEffect(() => {
    const total = data?.reduce((a, v) => {
      let price = v.discountPrice ?? v.price;

      return price + a;
    }, 0);
    setTotalPrice(total);
  });
  useEffect(() => setData(props.cartData));
  const cartHandler = apparel => {
    setData(props.cartData.filter(a => a.id !== apparel.id));
    dispatch({type: 'removeFromCart', apparel});
    apparel = {};
  };
  const renderItemHandler = function (item) {
    return (
      <TouchableOpacity
        style={styles.box}
        onPress={() =>
          props.navigation.navigate({
            name: 'DetailsScreenCart',
            params: {apparel: item.item, isFromCartScreen: true},
          })
        }>
        <ImageBackground
          source={{uri: item.item.imageUrl}}
          resizeMode="cover"
          style={styles.imageBackground}></ImageBackground>
        <View style={styles.details}>
          <View>
            <BaseText>{item.item.title}</BaseText>
            <BaseText color={Colors.primaryColor} style={{fontWeight: '700'}}>
              {item.item.discountPrice
                ? `${regionChecker(region)} ${currencyConverter(
                    item.item.discountPrice,
                    region,
                  )}`
                : `${
                    regionChecker(region) +
                    currencyConverter(item.item.price, region)
                  }`}
            </BaseText>
            <BaseText size={14} color={'grey'}>
              Size: {item.item.size}
            </BaseText>
          </View>

          <TouchableOpacity
            onPress={cartHandler.bind(this, item.item)}
            style={styles.favorite}>
            <Icon
              size={25}
              color={Colors.primaryColor}
              name="ios-trash-outline"></Icon>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
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
            : 'No items in your cart yet 🛒'}
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
      <View
        style={{
          justifyContent: 'space-between',
          height: 150,
          backgroundColor: 'white',

          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.8,

          elevation: 20,
          padding: 15,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <BaseText size={30} color="black">
            Total
          </BaseText>
          <BaseText size={30} color="black">
            {regionChecker(region)}
            {currencyConverter(totalPrice, region)}
          </BaseText>
        </View>
        <BaseButton
          onPress={() => dispatch({type: 'ADD_TO_CART', apparel})}
          fontSize={18}
          width="100%"
          title="Process checkout"
          style={{
            backgroundColor: '#50C878',
            height: 50,
            justifyContent: 'center',
            borderRadius: 4,
          }}
          type="flat"></BaseButton>
      </View>
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
