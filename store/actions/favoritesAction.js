export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const favoriteToggler = function (apparel) {
  return {type: TOGGLE_FAVORITE, apparel};
};
