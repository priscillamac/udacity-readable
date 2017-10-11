import {
  FETCH_POSTS,
  FETCH_POST_DETAILS
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
