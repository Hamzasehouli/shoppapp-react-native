const initialReducer = {
  language: 'English',
};

const languageReducer = function (state = initialReducer, action) {
  switch (action.type) {
    case 'language':
      state.language = action.language;
      return state;

    default:
      return state;
  }
};

export default languageReducer;
