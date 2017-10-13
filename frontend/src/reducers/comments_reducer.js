import {
  FETCH_COMMENTS,
  DELETE_COMMENT,
  UPVOTE_COMMENT,
  DOWNVOTE_COMMENT,
  CREATE_COMMENT
} from '../actions/types';

const initialState = {
  comments: []
};

export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMMENTS:
      return Object.assign({}, state, { comments: action.comments });
    case DELETE_COMMENT:
      return Object.assign({}, state, {
        // this filters to only show comments that weren't deleted
        comments: state.comments.filter(
          comment => comment.id !== action.comment.id
        )
      });
    case UPVOTE_COMMENT:
      return {
        ...state,
        comments: [
          ...state.comments.filter(comment => comment.id !== action.comment.id),
          action.comment
        ]
      };
    case DOWNVOTE_COMMENT:
      return {
        ...state,
        comments: [
          ...state.comments.filter(comment => comment.id !== action.comment.id),
          action.comment
        ]
      };
    case CREATE_COMMENT:
      console.log(action.comment);
      return {
        ...state,
        comments: [
          ...state.comments.filter(comment => comment.id !== action.comment.id),
          action.comment
        ]
      };
    default:
      return state;
  }
};

export default commentsReducer;
