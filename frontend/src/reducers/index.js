import {
  SET_CATEGORY
} from '../actions';

const initialState = {
  categoryName: ''
}

function categoryReducer (state = initialState, action) {
  switch (action.type) {
    case SET_CATEGORY:
      return Object.assign({}, state, { categoryName: action.categoryName });
    default:
      return state;
  }
}

export default categoryReducer;
