import HomeScreen from '../screens/HomeScreen';
import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import CartScreen from '../screens/CartScreen';
import ApparelScreen from '../screens/ApparelScreen';
import SaleScreen from '../screens/SaleScreen';
import SplashScreen from '../screens/SplashScreen';
import COLORS from '../constants/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import CollectionsScreen from '../screens/CollectionsScreen';
import StartScreen from '../screens/StartScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Colors from '../constants/Colors';
import ForgetScreen from '../screens/ForgetScreen';
import DetailsScreen from '../screens/DetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';

const Tab = createMaterialBottomTabNavigator();

const Stack = createNativeStackNavigator();

const Home = function () {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'white',
        },
        headerTintColor: Colors.primaryColor,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      initialRouteName="Collections">
      <Stack.Screen
        options={{headerShown: false}}
        name="Collections"
        component={CollectionsScreen}></Stack.Screen>
      <Stack.Screen name="Categories" component={HomeScreen}></Stack.Screen>
      <Stack.Screen name="CartScreen" component={CartScreen}></Stack.Screen>
      <Stack.Screen
        name="ApparelScreen"
        component={ApparelScreen}></Stack.Screen>
      <Stack.Screen
        name="DetailsScreen"
        component={DetailsScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};
const Cart = function () {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'white',
        },
        headerTintColor: Colors.primaryColor,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      initialRouteName="CartScreen">
      <Stack.Screen name="Categories" component={HomeScreen}></Stack.Screen>
      <Stack.Screen name="CartScreen" component={CartScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};
const Account = function () {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'white',
        },
        headerTintColor: Colors.primaryColor,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      initialRouteName="CartScreen">
      <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
      <Stack.Screen name="Signup" component={SignupScreen}></Stack.Screen>
      <Stack.Screen
        name="Reset Password"
        component={ForgetScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};
const Settings = function () {
  return <SettingsScreen />;
};
const Favorites = function () {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'white',
        },
        headerTintColor: Colors.primaryColor,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      initialRouteName="FavoritesScreen">
      <Stack.Screen name="FavoritesScreen">
        {function () {
          return <FavoritesScreen></FavoritesScreen>;
        }}
      </Stack.Screen>
      <Stack.Screen
        name="DetailsScreen"
        component={DetailsScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};

const MainStackScreen = function () {
  const data = useSelector(state => state.favorites.favorites);

  return (
    <Tab.Navigator
      name="ss"
      id="initBar"
      inactiveColor={Colors.primaryColor}
      activeColor={Colors.primaryColor}
      barStyle={{
        backgroundColor: 'white',
        height: 65,
        justifyContent: 'center',
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: function () {
            return (
              <Icon
                color={Colors.primaryColor}
                name="ios-home-outline"
                size={25}></Icon>
            );
          },
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: function () {
            return (
              <Icon
                color={Colors.primaryColor}
                name="ios-cart-outline"
                size={25}></Icon>
            );
          },
        }}
        name="Bag"
        component={Cart}
      />
      <Tab.Screen
        options={{
          tabBarIcon: function () {
            return (
              <Icon
                color={Colors.primaryColor}
                name="ios-heart-outline"
                size={25}></Icon>
            );
          },
          tabBarButton: function () {
            return <TouchableOpacity style={{color: red}}></TouchableOpacity>;
          },
        }}
        name="Favorites">
        {function () {
          return <Favorites data={data} />;
        }}
      </Tab.Screen>
      <Tab.Screen
        options={{
          tabBarIcon: function () {
            return (
              <Icon
                color={Colors.primaryColor}
                name="ios-person-outline"
                size={25}></Icon>
            );
          },
        }}
        name="Account"
        component={Account}
      />
      <Tab.Screen
        options={{
          tabBarIcon: function () {
            return (
              <Icon color={Colors.primaryColor} name="cog" size={25}></Icon>
            );
          },
        }}
        name="Settings"
        component={Settings}
      />
    </Tab.Navigator>
  );
};

const StackNavigator = (
  <Stack.Navigator initialRouteName="Start">
    <Stack.Screen
      options={{headerShown: false}}
      name="Splash"
      component={SplashScreen}></Stack.Screen>
    <Stack.Screen name="Sale" component={SaleScreen}></Stack.Screen>
    <Stack.Screen
      options={{headerShown: false}}
      name="Start"
      component={StartScreen}></Stack.Screen>
    <Stack.Screen
      options={{
        headerShown: false,
      }}
      name="MainStackScreen"
      component={MainStackScreen}></Stack.Screen>
  </Stack.Navigator>
);

export default StackNavigator;
