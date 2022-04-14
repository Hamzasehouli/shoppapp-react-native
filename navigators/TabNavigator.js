import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import React from 'react';
import COLORS from '../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = (
  <Tab.Navigator
    id="initBar"
    inactiveColor="#c2a5ff"
    activeColor={'white'}
    barStyle={{backgroundColor: COLORS.secondaryColor}}
    initialRouteName="Splash">
    <Tab.Screen
      options={{
        tabBarIcon: function () {
          return <Icon name="home" size={20}></Icon>;
        },
      }}
      name="Home"
      component={HomeScreen}
    />
    <Tab.Screen
      options={{
        tabBarIcon: function () {
          return <Icon name="shopping-cart" size={20}></Icon>;
        },
      }}
      name="Cart"
      component={CartScreen}
    />
  </Tab.Navigator>
);

export default TabNavigator;
