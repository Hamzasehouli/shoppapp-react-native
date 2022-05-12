const initialReducer = {
  region: 'Morocco',
};

const regionReducer = function (state = initialReducer, action) {
  state.region = action.region;
  return state;
};

export default regionReducer;
