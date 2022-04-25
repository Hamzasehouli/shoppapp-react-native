import {TOGGLE_FAVORITE} from '../actions/favoritsAction';
const initialReducer = {
  favorits: [],
};

const favoritesReducer = function (state = initialReducer, action) {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      console.log(action.apparelId);
      break;

    default:
      return state;
  }
  return state;
};

export default favoritesReducer;
