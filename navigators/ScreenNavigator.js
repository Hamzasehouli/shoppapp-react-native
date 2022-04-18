import HomeScreen from '../screens/HomeScreen';
import React from 'react';
import {View, Text} from 'react-native';
import CartScreen from '../screens/CartScreen';
import SplashScreen from '../screens/SplashScreen';
import COLORS from '../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import CollectionsScreen from '../screens/CollectionsScreen';

const Tab = createMaterialBottomTabNavigator();

const Stack = createNativeStackNavigator();

const Lal1 = function () {
  return (
    <Stack.Navigator initialRouteName="CollectionsScreen">
      <Stack.Screen
        name="CollectionsScreen"
        component={CollectionsScreen}></Stack.Screen>
      <Stack.Screen name="Categories" component={HomeScreen}></Stack.Screen>
      <Stack.Screen name="CartScreen" component={CartScreen}></Stack.Screen>
    </Stack.Navigator>
    // <View>
    //   <Text>home</Text>
    // </View>
  );
};
const Lal2 = function () {
  return (
    <Stack.Navigator initialRouteName="CartScreen">
      <Stack.Screen name="Categories" component={HomeScreen}></Stack.Screen>
      <Stack.Screen name="CartScreen" component={CartScreen}></Stack.Screen>
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
      barStyle={{
        backgroundColor: COLORS.secondaryColor,
        height: 65,
        justifyContent: 'center',
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: function () {
            return <Icon name="home" size={25}></Icon>;
          },
        }}
        name="Home"
        component={Lal1}
      />
      <Tab.Screen
        options={{
          tabBarIcon: function () {
            return <Icon name="shopping-bag" size={25}></Icon>;
          },
        }}
        name="Bag"
        component={Lal2}
      />
      <Tab.Screen
        options={{
          tabBarIcon: function () {
            return <Icon name="heart" size={25}></Icon>;
          },
        }}
        name="Favorites"
        component={Lal2}
      />
      <Tab.Screen
        options={{
          tabBarIcon: function () {
            return <Icon name="user" size={25}></Icon>;
          },
        }}
        name="Account"
        component={Lal2}
      />
      <Tab.Screen
        options={{
          tabBarIcon: function () {
            return <Icon name="cog" size={25}></Icon>;
          },
        }}
        name="Settings"
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
