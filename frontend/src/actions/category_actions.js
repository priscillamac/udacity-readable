import {
  SET_CATEGORY,
} from './types';

export const setCategory = categoryName => ({
  type: SET_CATEGORY,
  categoryName
});
