import {
  FETCH_COMMENTS
} from './types';
import * as ReadableAPI from '../utils/readable_api';

export const fetchComments = (comments) => dispatch => {
  ReadableAPI.getComments(comments)
    .then(comments => {
      dispatch({type: FETCH_COMMENTS, comments});
    })
};
