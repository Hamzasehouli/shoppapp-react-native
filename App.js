import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './navigators/TabNavigator';
import ScreenNavigator from './navigators/ScreenNavigator';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import favoritesReducer from './store/reducers/favorites';
import cartReducer from './store/reducers/cart';
import regionReducer from './store/reducers/region';
import languageReducer from './store/reducers/language';
import auth from './store/reducers/auth';

const rootReducers = combineReducers({
  favorites: favoritesReducer,
  cart: cartReducer,
  region: regionReducer,
  language: languageReducer,
  auth,
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
