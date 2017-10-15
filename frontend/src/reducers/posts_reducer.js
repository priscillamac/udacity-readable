import {
  FETCH_POSTS,
  FETCH_POST_DETAILS,
  DELETE_POST,
  UPVOTE_POST,
  DOWNVOTE_POST,
  CREATE_POST,
  EDIT_POST,
  SORT_BY_NEWEST,
  SORT_BY_OLDEST
} from '../actions/types';

const initialState = {
  posts: [],
  postDetails: [],
  sortBy: {
    newest: true
  }
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return Object.assign({}, state, { posts: action.posts });
    case CREATE_POST:
      return {
        ...state,
        posts: [
          ...state.posts.filter(post => post.id !== action.post.id),
          action.post
        ]
      };
    case FETCH_POST_DETAILS:
      return Object.assign({}, state, { postDetails: action.postDetails });
    case DELETE_POST:
      return Object.assign({}, state, {
        // this filters to only show posts that weren't deleted
        posts: state.posts.filter(post => post.id !== action.post.id)
      });
    case UPVOTE_POST:
      return {
        ...state,
        posts: [
          ...state.posts.filter(post => post.id !== action.post.id),
          action.post
        ]
      };
    case DOWNVOTE_POST:
      return {
        ...state,
        posts: [
          ...state.posts.filter(post => post.id !== action.post.id),
          action.post
        ]
      };
    case EDIT_POST:
      return {
        ...state,
        posts: [
          ...state.posts.filter(post => post.id !== action.post.id),
          action.post
        ]
      };
    case SORT_BY_NEWEST:
      return {
        ...state,
        sortBy: {
          newest: true
        }
      };
    case SORT_BY_OLDEST:
      return {
        ...state,
        sortBy: {
          newest: false
        }
      };
    default:
      return state;
  }
};

export default postsReducer;
