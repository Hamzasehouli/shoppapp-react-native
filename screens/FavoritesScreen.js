import React from 'react';
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
import Colors from '../constants/Colors';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect, useState} from 'react';

const FavoritesScreen = function (props) {
  const dispatch = useDispatch();
  const initData = useSelector(state => state.favorites.favorites);
  const [data, setData] = useState(initData);
  useEffect(() => console.log(data));
  // console.log(initData);

  const favoriteHandler = function (apparel) {
    dispatch({type: 'removeFavorite', apparel});
    // props.navigation.setParams({apparel});
    setData(props.data);
    // console.log(data);
  };
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
            <Icon size={25} color={Colors.primaryColor} name="ios-heart"></Icon>
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
  if (data.length <= 0) {
    return (
      <View>
        <Text>No favorites</Text>
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

export default FavoritesScreen;
