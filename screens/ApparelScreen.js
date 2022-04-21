import React, {useLayoutEffect} from 'react';
import {View, Text} from 'react-native';

const Apparel = function (props) {
  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: props.route.params.title,
    });
  });
  return (
    <View>
      <Text>Apparel</Text>
    </View>
  );
};

export default Apparel;
