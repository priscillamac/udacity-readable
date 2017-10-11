import React, { Component } from 'react';
import * as ReadableAPI from '../utils/readable_api';
import PostListItem from './post_list_item';
import moment from 'moment';
import { connect } from 'react-redux';
import { fetchPostDetails } from '../actions';

class PostDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: []
    };
  }

  componentDidMount() {
    const postId = this.props.match.params.posts_id;
    ReadableAPI.getComments(postId).then(comments => {
      this.setState({ comments });
    });

    ReadableAPI.getPostDetail(postId).then(postDetails => {
      this.props.fetchPostDetails(postDetails);
      this.setState({ postDetails });
    });

  }

  render() {
    const { comments } = this.state;
    const { post } = this.props;
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

const mapStateToProps = ({ postsReducer }) => ({
  post: postsReducer.postDetails
});

export default connect(mapStateToProps, {
  fetchPostDetails
})(PostDetail);
