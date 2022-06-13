const initialReducer = {
  isLoggedin: false,
  email: '',
  name: '',
  token: '',
};

const auth = function (state = initialReducer, action) {
  console.log(action);
  state.isLoggedin = action.status;
  state.email = action.email;
  state.name = action.name;
  state.token = action.token;
  return state;
};

export default auth;
