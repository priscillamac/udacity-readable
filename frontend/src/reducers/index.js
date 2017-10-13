import { combineReducers } from 'redux';
import categoryReducer from './category_reducer';
import commentsReducer from './comments_reducer';
import postsReducer from './posts_reducer';
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  categoryReducer,
  commentsReducer,
  postsReducer,
  form: formReducer
});
