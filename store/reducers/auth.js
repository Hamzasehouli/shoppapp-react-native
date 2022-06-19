import AsyncStorage from '@react-native-async-storage/async-storage';
import {ActionSheetIOS} from 'react-native';
const initialReducer = {
  isLoggedin: false,
  email: '',
  name: '',
  token: '',
};
(async function () {
  const jsonIsloggedin = await AsyncStorage.getItem('@isLoggedin');
  const jsonEmail = await AsyncStorage.getItem('@email');
  const jsonName = await AsyncStorage.getItem('@name');
  const jsonToken = await AsyncStorage.getItem('@token');
  initialReducer.isLoggedin = JSON.parse(jsonIsloggedin) ?? false;
  initialReducer.email = JSON.parse(jsonEmail) ?? '';
  initialReducer.name = JSON.parse(jsonName) ?? '';
  initialReducer.token = JSON.parse(jsonToken) ?? '';
})();

const auth = function (state = initialReducer, action) {
  if (action.type !== 'auth') return state;
  state.isLoggedin = action.status;
  state.email = action.email;
  state.name = action.name;
  state.token = action.token;
  const jsonIsloggedin = JSON.stringify(state.isLoggedin);
  const jsonEmail = JSON.stringify(state.email);
  const jsonName = JSON.stringify(state.name);
  const jsonToken = JSON.stringify(state.token);

  AsyncStorage.setItem('@isLoggedin', jsonIsloggedin).then(() => {});
  AsyncStorage.setItem('@email', jsonEmail).then(() => {});
  AsyncStorage.setItem('@name', jsonName).then(() => {});
  AsyncStorage.setItem('@token', jsonToken).then(() => {});
  return state;
};

export default auth;
