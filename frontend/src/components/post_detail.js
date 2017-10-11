import React, { Component } from 'react';
import PostListItem from './post_list_item';
import moment from 'moment';
import { connect } from 'react-redux';
import { fetchPostDetails, fetchComments } from '../actions';

class PostDetail extends Component {
  componentDidMount() {
    const postId = this.props.match.params.posts_id;
    this.props.fetchComments(postId);
    this.props.fetchPostDetails(postId);
  }

  render() {
    const { comments, post } = this.props;
    return (
      <div className="post-detail">
        <h1>
          {post.title}
        </h1>
        <PostListItem
          id={post.id}
          body={post.body}
          title={post.title}
          category={post.category}
          timestamp={post.timestamp}
          author={post.author}
          voteScore={post.voteScore}
         />

        <div className="comment-section">
          <h2>
            Comments: {comments.length}
          </h2>
          {comments.map(comment =>
            <li key={comment.id}>
              {comment.author}
              {comment.body}
              {comment.voteScore}
              {moment(comment.timestamp).format('LL')}
            </li>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ postsReducer, commentsReducer }) => ({
  post: postsReducer.postDetails,
  comments: commentsReducer.comments
});

export default connect(mapStateToProps, {
  fetchComments,
  fetchPostDetails
})(PostDetail);
