export const SET_CATEGORY = 'SET_CATEGORY';

export function setCategory (categoryName) {
  return {
    type: SET_CATEGORY,
    categoryName
  }
}

// export const setCategory = categoryName => ({
//   type: SET_CATEGORY,
//   categoryName
// });
