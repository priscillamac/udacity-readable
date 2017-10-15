import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { connect } from 'react-redux';
import {
  deletePost,
  upvotePost,
  downvotePost,
  fetchComments
} from '../actions';
import { withRouter } from 'react-router-dom';
import FaAngleUp from 'react-icons/lib/fa/angle-up';
import FaAngleDown from 'react-icons/lib/fa/angle-down';

class PostListItem extends Component {
  componentDidMount() {
    this.props.fetchComments(this.props.id);
  }
  onDeletePost() {
    this.props.deletePost(this.props.id);
    // this redirects back to home if a user deletes a comment.
    // needs withRouter to work
    this.props.history.push('/');
  }

  onClickUpvote() {
    this.props.upvotePost(this.props.id);
  }

  onClickDownvote() {
    this.props.downvotePost(this.props.id);
  }

  render() {
    const {
      id,
      body,
      title,
      category,
      timestamp,
      author,
      voteScore
    } = this.props;
    return (
      <li className="post-list-item" key={id}>
        <div className="main-content">
          <Link className="title" to={`/category/${category}/${id}`}>
            <h3>
              {title}
            </h3>
          </Link>
          <p className="description">
            {body}
          </p>
          <p>
            Posted on {moment(timestamp).format('LL')} by {author} in{' '}
            <Link to={`/category/${category}`}>{category}</Link> • Comments
          </p>
          <div className="call-to-action">
            <Link
              to={`/category/${category}/${id}/edit`}
              className="edit-button"
            >
              Edit Post
            </Link>{' '}
            <p className="delete-button" onClick={this.onDeletePost.bind(this)}>
              Delete Post
            </p>
          </div>
        </div>
        <div className="vote-mechanism">
          <FaAngleUp
            size={20}
            style={{
              color: '#0076E5',
              cursor: 'pointer'
            }}
            onClick={this.onClickUpvote.bind(this)}
          />
          <div className="vote-score">
            {voteScore}
          </div>
          <FaAngleDown
            size={20}
            style={{
              color: 'red',
              cursor: 'pointer'
            }}
            onClick={this.onClickDownvote.bind(this)}
          />
        </div>
      </li>
    );
  }
}

const mapStateToProps = ({ postsReducer, commentsReducer }) => ({
  postsReducer,
  comments: commentsReducer.comments
});

export default withRouter(
  connect(mapStateToProps, {
    fetchComments,
    deletePost,
    downvotePost,
    upvotePost
  })(PostListItem)
);
