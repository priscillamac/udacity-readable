import {
  SET_CATEGORY,
  FETCH_CATEGORIES
} from './types';

export const setCategory = categoryName => ({
  type: SET_CATEGORY,
  categoryName
});

export const fetchCategories = categories => ({
  type: FETCH_CATEGORIES,
  categories
});
