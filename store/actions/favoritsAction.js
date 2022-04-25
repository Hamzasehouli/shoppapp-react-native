export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const favoriteToggler = function (id) {
  return {type: TOGGLE_FAVORITE, apparelId: id};
};
