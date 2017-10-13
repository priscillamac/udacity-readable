import {
  FETCH_POSTS,
  FETCH_POST_DETAILS,
  DELETE_POST,
  UPVOTE_POST,
  DOWNVOTE_POST,
  CREATE_POST
} from '../actions/types';

const initialState = {
  posts: [],
  postDetails: []
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return Object.assign({}, state, { posts: action.posts });
    case CREATE_POST:
      console.log(action.post);
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
    default:
      return state;
  }
};

export default postsReducer;
