import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './navigators/TabNavigator';

const App = function () {
  return <NavigationContainer>{TabNavigator}</NavigationContainer>;
};

export default App;
