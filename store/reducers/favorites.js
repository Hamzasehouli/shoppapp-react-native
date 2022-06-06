import AsyncStorage from '@react-native-async-storage/async-storage';
import {TOGGLE_FAVORITE} from '../actions/favoritesAction';
const initialReducer = {
  favorites: [],
};
(async function () {
  const jsonValue = await AsyncStorage.getItem('@favorites');
  initialReducer.favorites = JSON.parse(jsonValue) ?? [];
})();

const favoritesReducer = function (state = initialReducer, action) {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      if (state.favorites.some(f => f.id === action.apparel.id)) return state;
      state.favorites.push(action.apparel);
      const jsonValue = JSON.stringify(state.favorites);
      AsyncStorage.setItem('@favorites', jsonValue).then(() =>
        console.log('stored'),
      );
      // console.log(state.favorites);
      return state;
    case 'removeFavorite':
      const ind = state.favorites.findIndex(f => f.id === action.apparel.id);

      // state.favorites.push(action.apparel);

      // console.log(state.favorites, 'before');
      state.favorites.splice(ind, 1);
      const val = JSON.stringify(state.favorites);
      AsyncStorage.setItem('@favorites', val).then(() =>
        console.log('removed'),
      );
      // console.log(state.favorites, 'after');
      return state;

    default:
      return state;
  }
};

export default favoritesReducer;
