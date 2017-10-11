import {
  FETCH_POSTS,
  FETCH_POST_DETAILS
} from '../actions/types';

const initialState = {
  posts: [],
  postDetails: []
}

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return Object.assign({}, state, { posts: action.posts });
    case FETCH_POST_DETAILS:
      return Object.assign({}, state, { postDetails: action.postDetails });
    default:
      return state;
  }
}

export default postsReducer;
