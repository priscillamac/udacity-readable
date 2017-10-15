import {
  FETCH_POSTS,
  FETCH_POST_DETAILS,
  DELETE_POST,
  UPVOTE_POST,
  DOWNVOTE_POST,
  CREATE_POST,
  EDIT_POST,
  SORT_BY_NEWEST,
  SORT_BY_OLDEST,
} from './types';
import * as ReadableAPI from '../utils/readable_api';

export const fetchPosts = (posts) => dispatch => {
  ReadableAPI.getPosts(posts)
    .then(posts => {
      dispatch({type: FETCH_POSTS, posts});
    })
};

export const fetchPostDetails = (postDetails) => dispatch => {
  ReadableAPI.getPostDetail(postDetails)
    .then(postDetails => {
      dispatch({type: FETCH_POST_DETAILS, postDetails});
    })
};

export const deletePost = (post) => dispatch => {
  ReadableAPI.deletePost(post)
    .then(post => {
      dispatch({type: DELETE_POST, post});
    })
}

export const upvotePost = (post) => dispatch => {
  ReadableAPI.upvotePost(post)
    .then(post => {
      dispatch({type: UPVOTE_POST, post});
    })
}

export const downvotePost = (post) => dispatch => {
  ReadableAPI.downvotePost(post)
    .then(post => {
      dispatch({type: DOWNVOTE_POST, post});
    })
}


export const createPost = (post) => dispatch => {
  ReadableAPI.createPost(post)
    .then(post => {
      dispatch({type: CREATE_POST, post});
    })
}

export const editPost = (post, id) => dispatch => {
  ReadableAPI.editPost(post, id).then(() => {
    dispatch({
      type: EDIT_POST,
      post
    });
  });
};

export const sortByNewest = () => dispatch =>
  dispatch({type: SORT_BY_NEWEST});

export const sortByOldest = () => dispatch =>
  dispatch({type: SORT_BY_OLDEST});
