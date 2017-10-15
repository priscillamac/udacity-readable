import React, { Component } from 'react';
import CommentListItem from './comment_list_item';
import PostListItem from './post_list_item';
import { connect } from 'react-redux';
import { fetchPostDetails, fetchComments, createComment } from '../actions';
import { Field, reduxForm, reset } from 'redux-form';
import { sortByDate } from '../services';

class PostDetail extends Component {
  componentDidMount() {
    const postId = this.props.match.params.posts_id;
    this.props.fetchComments(postId);
    this.props.fetchPostDetails(postId);
  }

  handleFormSubmit({ author, body }) {
    const uniqueId = Math.random().toString(36).substr(-20);
    const commentObject = {
      id: uniqueId,
      parentId: this.props.match.params.posts_id,
      timestamp: Date.now(),
      body,
      author
    };
    this.props.createComment(commentObject);
  }

  render() {
    const { comments, handleSubmit, post } = this.props;
    const postId = this.props.match.params.posts_id;

    return (
      <div className="post-detail">
        <PostListItem
          id={postId}
          body={post.body}
          title={post.title}
          category={post.category}
          timestamp={post.timestamp}
          author={post.author}
          voteScore={post.voteScore}
        />

        <div className="comment-section">
          <div className="number-of-comments">
            {comments.length} comments
          </div>
          <div className="comment-body">
            <h3>Add a comment</h3>
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
              <Field
                name="author"
                component="input"
                type="text"
                placeholder="Name"
                required
              />
              <Field
                name="body"
                component="input"
                type="text"
                placeholder="Leave a comment"
                required
              />
              <button type="submit">Submit</button>
            </form>
            <ul>
              {comments
                .sort(sortByDate(true))
                .map(comment =>
                  <CommentListItem key={`${comment.id}-comment`} {...comment} />
                )}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ postsReducer, commentsReducer }) => ({
  postsReducer,
  posts: postsReducer.posts,
  post: postsReducer.postDetails,
  title: postsReducer.postDetails.title,
  comments: commentsReducer.comments
});

const onSubmitSuccess = (result, dispatch) => dispatch(reset('commentForm'));

PostDetail = connect(mapStateToProps, {
  fetchComments,
  fetchPostDetails,
  createComment
})(PostDetail);

export default reduxForm({
  form: 'commentForm',
  onSubmitSuccess: onSubmitSuccess
})(PostDetail);
