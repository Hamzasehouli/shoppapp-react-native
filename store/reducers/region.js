import AsyncStorage from '@react-native-async-storage/async-storage';
const initialReducer = {
  region: 'Morocco',
};
(async function () {
  const jsonValue = await AsyncStorage.getItem('@region');
  initialReducer.region = JSON.parse(jsonValue) ?? 'Morocco';
})();

const regionReducer = function (state = initialReducer, action) {
  switch (action.type) {
    case 'region':
      state.region = action.region;
      const jsonValue = JSON.stringify(state.region);
      AsyncStorage.setItem('@region', jsonValue).then(() =>
        console.log('stored'),
      );
      return state;

    default:
      return state;
  }
};

export default regionReducer;
