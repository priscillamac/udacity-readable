import {
  FETCH_COMMENTS
} from '../actions/types';

const initialState = {
  comments: []
}

export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMMENTS:
      return Object.assign({}, state, { comments: action.comments });
    default:
      return state;
  }
}

export default commentsReducer;
