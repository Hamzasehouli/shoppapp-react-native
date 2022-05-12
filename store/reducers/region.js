const initialReducer = {
  region: 'Morocco',
};

const regionReducer = function (state = initialReducer, action) {
  switch (action.type) {
    case 'region':
      state.region = action.region;
      return state;

    default:
      return state;
  }
};

export default regionReducer;
