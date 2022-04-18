import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BaseScreen = function (props) {
  return <View style={styles.screen}>{props.children}</View>;
};

const styles = StyleSheet.create({
  screen: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
  },
});
export default BaseScreen;
