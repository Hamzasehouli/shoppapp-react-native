import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './navigators/TabNavigator';
import ScreenNavigator from './navigators/ScreenNavigator';

const App = function () {
  return <NavigationContainer>{ScreenNavigator}</NavigationContainer>;
};

export default App;
