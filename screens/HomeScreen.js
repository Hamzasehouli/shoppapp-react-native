import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = function () {
  return (
    <View>
      <Text> Home Screen</Text>
      <Icon name="heart" size={20}></Icon>
    </View>
  );
};

export default HomeScreen;
