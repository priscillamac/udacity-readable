import {
  FETCH_POSTS
} from '../actions/types';

const initialState = {
  posts: []
}

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return Object.assign({}, state, { posts: action.posts });
    default:
      return state;
  }
}

export default postsReducer;
