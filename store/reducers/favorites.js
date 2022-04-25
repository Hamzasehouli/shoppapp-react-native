import {TOGGLE_FAVORITE} from '../actions/favoritesAction';
const initialReducer = {
  favorites: [],
};

const favoritesReducer = function (state = initialReducer, action) {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      state.favorites.push(action.apparel);
      return state;
    case 'removeFavorite':
      const ind = state.favorites.findIndex(f => f.id === action.apparel.id);

      // state.favorites.push(action.apparel);

      state.favorites.splice(ind, 1);
      return state;

    default:
      return state;
  }
};

export default favoritesReducer;
