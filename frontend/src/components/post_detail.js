import React, { Component } from 'react';
import PostsList from './posts_list';
import CommentListItem from './comment_list_item';
import { connect } from 'react-redux';
import { fetchPostDetails, fetchComments, createComment } from '../actions';
import { Field, reduxForm, reset} from 'redux-form';

function sortByDate(desc = true) {
  if (desc) {
    return (a, b) => new Date(b.timestamp) - new Date(a.timestamp);
  }

  return (a, b) => new Date(a.timestamp) - new Date(b.timestamp);
}

class PostDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDescending: true
    };
  }

  componentDidMount() {
    const postId = this.props.match.params.posts_id;
    this.props.fetchComments(postId);
    this.props.fetchPostDetails(postId);
  }

  handleFormSubmit({ author, comment }) {
    const uniqueId = Math.random().toString(36).substr(-20);
    const commentObject = {
      id: uniqueId,
      timestamp: Date.now(),
      author,
      body: comment,
      parentId: this.props.match.params.posts_id
    };
    this.props.createComment(commentObject);
  }

  render() {
    const { comments, posts, title, handleSubmit } = this.props;
    const postId = this.props.match.params.posts_id;

    return (
      <div className="post-detail">
        <h1>
          {title}
        </h1>
        <PostsList posts={posts.filter(post => post.id === postId)} />
        {/* <PostListItem
          id={post.id}
          body={post.body}
          title={post.title}
          category={post.category}
          timestamp={post.timestamp}
          author={post.author}
          voteScore={post.voteScore}
         /> */}

        <div className="comment-section">
          <h2>Comments</h2>
          <h3>Add a comment</h3>
          <form
            onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}
          >
            <div>
              <label>Your Name</label>
              <div>
                <Field
                  name="author"
                  component="input"
                  type="text"
                  placeholder="Name"
                  required
                />
              </div>
            </div>
            <div>
              <label>Comment</label>
              <div>
                <Field
                  name="comment"
                  component="input"
                  type="text"
                  placeholder="Leave a comment"
                  required
                />
              </div>
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
          {comments
            .sort(sortByDate(this.state.isDescending))
            .map(comment => <CommentListItem key={comment.id} {...comment} />)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ postsReducer, commentsReducer }) => ({
  postsReducer,
  posts: postsReducer.posts,
  title: postsReducer.postDetails.title,
  comments: commentsReducer.comments
});

const onSubmitSuccess = (result, dispatch) =>
  dispatch(reset('commentForm'));

PostDetail = connect(mapStateToProps, {
  fetchComments,
  fetchPostDetails,
  createComment
})(PostDetail);

export default reduxForm({
  form: 'commentForm',
  onSubmitSuccess: onSubmitSuccess,
})(PostDetail);
