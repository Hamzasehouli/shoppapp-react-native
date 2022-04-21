import React, {useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {SNEAKERS} from '../data/data';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors';
import BaseText from '../components/BaseText';

const Apparel = function (props) {
  useEffect(() => {
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
        data={SNEAKERS}
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
