import HomeScreen from '../screens/HomeScreen';
import React from 'react';
import CartScreen from '../screens/CartScreen';
import SplashScreen from '../screens/SplashScreen';
import COLORS from '../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

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

export default StackNavigator;
