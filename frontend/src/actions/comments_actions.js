import {
  FETCH_COMMENTS,
  DELETE_COMMENT,
  DOWNVOTE_COMMENT,
  UPVOTE_COMMENT
} from './types';
import * as ReadableAPI from '../utils/readable_api';

export const fetchComments = (comments) => dispatch => {
  ReadableAPI.getComments(comments)
    .then(comments => {
      dispatch({type: FETCH_COMMENTS, comments});
    })
};

export const deleteComment = (comment) => dispatch => {
  ReadableAPI.deleteComment(comment)
    .then(comment => {
      dispatch({type: DELETE_COMMENT, comment});
    })
}

export const upvoteComment = (comment) => dispatch => {
  ReadableAPI.upvoteComment(comment)
    .then(comment => {
      dispatch({type: UPVOTE_COMMENT, comment});
    })
}

export const downvoteComment = (comment) => dispatch => {
  ReadableAPI.downvoteComment(comment)
    .then(comment => {
      dispatch({type: DOWNVOTE_COMMENT, comment});
    })
}
