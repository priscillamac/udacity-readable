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

  onEditPost() {
    console.log('onEditPost was clicked');
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
        <Link className="title" to={`/category/${category}/${id}`}>
          <h3>
            {title}
          </h3>
        </Link>
        <p className="description">
          {body}
        </p>
        <p>
          Category: <Link to={`/category/${category}`}>{category}</Link>
        </p>
        <p>
          vote Score: {voteScore}
          <button onClick={this.onClickUpvote.bind(this)}>upvote</button>
          <button onClick={this.onClickDownvote.bind(this)}>downvote</button>
        </p>
        <p>
          author: {author}
        </p>
        <p>
          Comments: THIS NEEDS TO BE DONE
        </p>
        {moment(timestamp).format('LL')}
        <button onClick={this.onDeletePost.bind(this)}>DELETE</button>
        <button onClick={this.onEditPost.bind(this)}>Edit</button>
      <Link to={`/category/${category}/${id}/edit`}>edit</Link>
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
