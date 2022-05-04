const initialReducer = {
  isLoggedin: false,
  email: '',
  tokenId: '',
};

const auth = function (state = initialReducer, action) {
  state.isLoggedin = action.status;
  state.email = action.email;
  state.tokenId = action.tokenId;
  console.log(state);
  return state;
};

export default auth;
