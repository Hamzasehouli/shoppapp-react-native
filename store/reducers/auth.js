const initialReducer = {
  isLoggedin: false,
  email: '',
  tokenId: '',
};

const auth = function (state = initialReducer, action) {
  state.isLoggedin = action.status;
  state.email = action.email;
  state.tokenId = action.tokenId;
  return state;
};

export default auth;
