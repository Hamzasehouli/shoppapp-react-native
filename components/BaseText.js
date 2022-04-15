import React from 'react';
import {Text, StyleSheet} from 'react-native';
const BaseText = function (props) {
  return (
    <Text
      style={{
        ...styles.text,
        fontSize: props.size ?? 16,
        color: props.color ?? 'gray',
      }}
      {...props}>
      {props.title}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Roboto-Black',
  },
});

export default BaseText;
