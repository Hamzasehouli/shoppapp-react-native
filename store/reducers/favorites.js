import {TOGGLE_FAVORITE} from '../actions/favoritesAction';
const initialReducer = {
  favorites: [],
};

const favoritesReducer = function (state = initialReducer, action) {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      state.favorites.push(action.apparel);

      break;

    default:
      return state;
  }
  return state;
};

export default favoritesReducer;
