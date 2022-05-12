import {ADD_TO_CART} from '../actions/cartAction';
const initialReducer = {
  cart: [],
};

const cartReducer = function (state = initialReducer, action) {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.cart.some(f => f.id === action.apparel.id)) return state;
      state.cart.push(action.apparel);
      // console.log(state.favorites);
      return state;
    case 'removeFromCart':
      const ind = state.cart.findIndex(f => f.id === action.apparel.id);

      // state.favorites.push(action.apparel);

      // console.log(state.favorites, 'before');
      state.cart.splice(ind, 1);
      // console.log(state.favorites, 'after');
      return state;

    default:
      return state;
  }
};

export default cartReducer;
