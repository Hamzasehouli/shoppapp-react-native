const initialReducer = {
  language: 'English',
};

const languageReducer = function (state = initialReducer, action) {
  state.language = action.language;
  return state;
};

export default languageReducer;
