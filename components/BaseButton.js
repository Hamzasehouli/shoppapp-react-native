import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import Colors from '../constants/Colors';

const BaseButton = function (props) {
  return (
    <TouchableOpacity
      style={{...styles.button, ...styles[props.type]}}
      {...props}>
      <Text
        style={{
          ...styles.text,
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
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Roboto-Black',
    fontWeight: '700',
    fontSize: 16,
  },
  flat: {},
  ghost: {
    backgroundColor: 'white',
  },
  standard: {},
});

export default BaseButton;
