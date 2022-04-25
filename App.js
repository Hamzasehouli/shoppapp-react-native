import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './navigators/TabNavigator';
import ScreenNavigator from './navigators/ScreenNavigator';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import favoritesReducer from './store/reducers/favorites';

const rootReducers = combineReducers({
  favorites: favoritesReducer,
});

const store = createStore(rootReducers);

const App = function () {
  return (
    <Provider store={store}>
      <NavigationContainer>{ScreenNavigator}</NavigationContainer>
    </Provider>
  );
};

export default App;
