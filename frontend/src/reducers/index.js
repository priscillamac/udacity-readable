import {
  SELECT_CATEGORY
} from '../actions';

const initialState = {
  selectedCategory: ''
}

function selectCategory (state = initialState, action) {
  const { category } = action;

  switch (action.type) {
    case SELECT_CATEGORY:
      return Object.assign({}, state, { selectedCategory: 'swag' });
    default:
      return state;
  }
}

export default selectCategory;


// const appReducer = (state, action) =>
//   switch (action.type) {
//     case 'SELECT_CATEGORY'
//       return state.filter(obj => obj.category !== action.category);
//     default:
//       return state;
//   }
