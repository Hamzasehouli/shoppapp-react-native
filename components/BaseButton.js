import React from 'react';
import {TouchableNativeFeedback, Text, StyleSheet} from 'react-native';
const BaseButton = function (props) {
  return (
    <TouchableNativeFeedback {...props} onPress={() => console.log('jjj')}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({});

export default BaseButton;
