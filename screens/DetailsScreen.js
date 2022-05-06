import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

const DetailsScreen = function (props) {
  useEffect(() => {
    console.log(props.route.params);
  });
  return (
    <View>
      <Text>dETAILS sCREEN</Text>
    </View>
  );
};

export default DetailsScreen;
