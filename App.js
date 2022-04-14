import React from 'react';
import {View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const HomeScreen = function () {
  return (
    <View>
      <Text> homepage</Text>
    </View>
  );
};
const CartScreen = function () {
  return (
    <View>
      <Text> cart</Text>
    </View>
  );
};

const StackNavigator = (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
    <Stack.Screen name="Cart" component={CartScreen}></Stack.Screen>
  </Stack.Navigator>
);

const App = function () {
  return <NavigationContainer>{StackNavigator}</NavigationContainer>;
};

export default App;
