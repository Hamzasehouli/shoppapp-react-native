import React from 'react';
import {View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';

const Stack = createNativeStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = (
  <Tab.Navigator initialRouteName="Splash">
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Cart" component={CartScreen} />
  </Tab.Navigator>
);

const StackNavigator = (
  <Stack.Navigator initialRouteName="Splash">
    <Stack.Screen
      options={{headerShown: false}}
      name="Splash"
      component={SplashScreen}></Stack.Screen>
    <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
    <Stack.Screen name="Cart" component={CartScreen}></Stack.Screen>
  </Stack.Navigator>
);

const App = function () {
  return <NavigationContainer>{TabNavigator}</NavigationContainer>;
};

export default App;
