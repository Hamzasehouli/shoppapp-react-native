import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import Colors from '../constants/Colors';

const BaseButton = function (props) {
  return (
    <TouchableOpacity
      style={{...styles.button, ...styles[props.type], width: props.width}}
      {...props}>
      <Text
        style={{
          ...styles.text,
          fontSize: props.fontSize ?? 20,
          color:
            props.type === 'flat'
              ? 'white'
              : props.type === 'ghost'
              ? Colors.primaryColor
              : 'black',
        }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    // paddingRight: 20,
    // paddingLeft: 20,
    // paddingTop: 7,
    // paddingBottom: 7,
    width: '80%',
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Roboto-Black',
    fontWeight: '700',
    fontSize: 23,
    textAlign: 'center',
  },
  flat: {
    backgroundColor: Colors.primaryColor,
  },
  ghost: {
    backgroundColor: 'white',
  },
  standard: {},
});

export default BaseButton;
