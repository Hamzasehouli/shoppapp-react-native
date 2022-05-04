const initialReducer = {
  isLoggedin: false,
};

const auth = function (state = initialReducer, action) {
  console.log(action.status);
  state.isLoggedin = action.status;
  return state;
};

export default auth;
