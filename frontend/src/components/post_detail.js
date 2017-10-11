import React, { Component } from 'react';
import * as ReadableAPI from '../utils/readable_api';
import PostListItem from './post_list_item';
import moment from 'moment';

class PostDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      post: []
    };
  }

  componentDidMount() {
    const postId = this.props.match.params.posts_id;
    ReadableAPI.getComments(postId).then(comments => {
      this.setState({ comments });
    });

    ReadableAPI.getPostDetail(postId).then(post => {
      this.setState({ post });
    });
  }

  render() {
    const { comments, post } = this.state;
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

export default PostDetail;
