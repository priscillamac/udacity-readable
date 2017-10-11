import {
  FETCH_CATEGORIES,
  SET_CATEGORY
} from './types';
import * as ReadableAPI from '../utils/readable_api';

export const fetchCategories = (categories) => dispatch => {
  ReadableAPI.getCategories(categories)
    .then(categories => {
      dispatch({type: FETCH_CATEGORIES, categories});
    })
};

export const setCategory = categoryName => ({
  type: SET_CATEGORY,
  categoryName
});
