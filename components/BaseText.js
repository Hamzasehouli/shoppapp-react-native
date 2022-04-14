import React from 'react';
import {Text, StyleSheet} from 'react-native';
const BaseText = function (props) {
  return (
    <Text
      style={{...styles.text, fontSize: props.size, color: props.color}}
      {...props}>
      {props.title}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Roboto',
  },
});

export default BaseText;
