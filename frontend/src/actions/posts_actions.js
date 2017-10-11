import {
  FETCH_POSTS,
  FETCH_POST_DETAILS
} from './types';

export const fetchPosts = posts => ({
  type: FETCH_POSTS,
  posts
});

export const fetchPostDetails = postDetails => ({
  type: FETCH_POST_DETAILS,
  postDetails
});
