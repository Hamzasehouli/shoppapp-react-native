import HomeScreen from '../screens/HomeScreen';
import React from 'react';
import {View, Text} from 'react-native';
import CartScreen from '../screens/CartScreen';
import SplashScreen from '../screens/SplashScreen';
import COLORS from '../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

const Stack = createNativeStackNavigator();

const Lal1 = function () {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
      <Stack.Screen name="Cart" component={CartScreen}></Stack.Screen>
    </Stack.Navigator>
    // <View>
    //   <Text>home</Text>
    // </View>
  );
};
const Lal2 = function () {
  return (
    <Stack.Navigator initialRouteName="Cart">
      <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
      <Stack.Screen name="Cart" component={CartScreen}></Stack.Screen>
    </Stack.Navigator>
    // <View>
    //   <Text>cart</Text>
    // </View>
  );
};

const MainStackScreen = function () {
  return (
    <Tab.Navigator
      id="initBar"
      inactiveColor="#c2a5ff"
      activeColor={'white'}
      barStyle={{backgroundColor: COLORS.secondaryColor}}>
      <Tab.Screen
        options={{
          tabBarIcon: function () {
            return <Icon name="home" size={20}></Icon>;
          },
        }}
        name="HomeScreen"
        component={Lal1}
      />
      <Tab.Screen
        options={{
          tabBarIcon: function () {
            return <Icon name="shopping-cart" size={20}></Icon>;
          },
        }}
        name="CartScreen"
        component={Lal2}
      />
    </Tab.Navigator>
  );
};

const StackNavigator = (
  <Stack.Navigator initialRouteName="Splash">
    <Stack.Screen
      options={{headerShown: false}}
      name="Splash"
      component={SplashScreen}></Stack.Screen>
    <Stack.Screen
      options={{headerShown: false}}
      name="MainStackScreen"
      component={MainStackScreen}></Stack.Screen>
    {/* <Stack.Screen name="Cart" component={CartScreen}></Stack.Screen> */}
  </Stack.Navigator>
);

export default StackNavigator;
