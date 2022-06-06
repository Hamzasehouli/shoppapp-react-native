import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import BaseText from '../components/BaseText';

const SaleScreen = function (props) {
  const {language} = props.language;
  const collectionsData = [
    {
      id: 'cl1',
      title:
        language === 'French'
          ? 'Soldes hommes'
          : language === 'Arabic'
          ? 'تخفيضات رجال'
          : 'Men Sales',
    },
    {
      id: 'cl2',
      title:
        language === 'French'
          ? 'Soldes femmes'
          : language === 'Arabic'
          ? 'تخفيضات نساء'
          : 'Women Sales',
    },
  ];

  const renderItemHandler = function (item) {
    return (
      <TouchableOpacity
        style={{marginBottom: 20}}
        onPress={() =>
          props.navigation.navigate({
            name: 'Categories',
            params: {
              collection: item.item.title.split(' ')[0],
              saleApparel: true,
            },
          })
        }>
        <BaseText
          style={{
            textAlign: 'center',
            fontWeight: '700',
            fontFamily: 'Roboto-Bold',
          }}
          color="black"
          size={30}>
          {item.item.title}
        </BaseText>
      </TouchableOpacity>
    );
  };

  return (
    <ImageBackground
      resizeMode="cover"
      style={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      source={{
        uri: 'https://i.pinimg.com/736x/37/5e/0b/375e0bb9628b7a4c987421d752db88ae.jpg',
      }}>
      <View style={styles.screen}>
        <FlatList data={collectionsData} renderItem={renderItemHandler} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
});

export default SaleScreen;
