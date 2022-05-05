import {TOGGLE_FAVORITE} from '../actions/favoritesAction';
const initialReducer = {
  favorites: [],
};

const favoritesReducer = function (state = initialReducer, action) {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      if (state.favorites.some(f => f.id === action.apparel.id)) return state;
      state.favorites.push(action.apparel);
      // console.log(state.favorites);
      return state;
    case 'removeFavorite':
      const ind = state.favorites.findIndex(f => f.id === action.apparel.id);

      // state.favorites.push(action.apparel);

      // console.log(state.favorites, 'before');
      state.favorites.splice(ind, 1);
      // console.log(state.favorites, 'after');
      return state;

    default:
      return state;
  }
};

export default favoritesReducer;
