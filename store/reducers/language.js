import AsyncStorage from '@react-native-async-storage/async-storage';
const initialReducer = {
  language: 'English',
};
(async function () {
  const jsonValue = await AsyncStorage.getItem('@language');
  initialReducer.language = JSON.parse(jsonValue) ?? 'English';
})();

const languageReducer = function (state = initialReducer, action) {
  switch (action.type) {
    case 'language':
      state.language = action.language;
      const jsonValue = JSON.stringify(state.language);
      AsyncStorage.setItem('@language', jsonValue).then(() =>
        console.log('stored'),
      );
      return state;

    default:
      return state;
  }
};

export default languageReducer;
