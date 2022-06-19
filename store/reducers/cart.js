import AsyncStorage from '@react-native-async-storage/async-storage';
import {ADD_TO_CART} from '../actions/cartAction';
const initialReducer = {
  cart: [],
};
(async function () {
  const jsonValue = await AsyncStorage.getItem('@cart');
  initialReducer.cart = JSON.parse(jsonValue) ?? [];
})();

const cartReducer = function (state = initialReducer, action) {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.cart.some(f => f.id === action.apparel.id)) return state;
      state.cart.push(action.apparel);
      const jsonValue = JSON.stringify(state.cart);
      AsyncStorage.setItem('@cart', jsonValue).then(() => {});
      // console.log(state.favorites);
      return state;
    case 'removeFromCart':
      const ind = state.cart.findIndex(f => f.id === action.apparel.id);

      // state.favorites.push(action.apparel);

      // console.log(state.favorites, 'before');
      state.cart.splice(ind, 1);
      const val = JSON.stringify(state.cart);
      AsyncStorage.setItem('@cart', val).then(() => console.log('removed'));
      // console.log(state.favorites, 'after');
      return state;
    case 'deleteCart':
      state.cart = [];
      AsyncStorage.removeItem('@cart').then(() => {
        action.props.navigation.goBack();
      });
      return state;

    default:
      return state;
  }
};

export default cartReducer;
