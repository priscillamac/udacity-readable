import {
  FETCH_POSTS,
  FETCH_POST_DETAILS,
  DELETE_POST,
  UPVOTE_POST,
  DOWNVOTE_POST
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
