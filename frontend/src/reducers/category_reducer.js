import {
  SET_CATEGORY,
  FETCH_CATEGORIES
} from '../actions/types';

const initialState = {
  categoryName: '',
  categories: []
}

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORY:
      return Object.assign({}, state, { categoryName: action.categoryName });
    case FETCH_CATEGORIES:
      return Object.assign({}, state, { categories: action.categories });
    default:
      return state;
  }
}

export default categoryReducer;
