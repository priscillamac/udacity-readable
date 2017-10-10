import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import * as ReadableAPI from '../utils/readable_api';
import PostsList from './posts_list';

class PostPage extends Component {
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
  }

  render() {
    const { comments } = this.state;
    const { posts } = this.props;
    const postId = this.props.match.params.posts_id;
    console.log(comments);
    return (
      <div className="post-page">
        <h1>
          This is the post page for {postId}
        </h1>
        <PostsList posts={posts.filter(post => post.id === postId)} />
        <div className="comment-section">
          <h2>Comments: {comments.length}</h2>
          {comments.map(comment =>
            <li key={comment.id}>
              {comment.author}
              {comment.body}
              {comment.voteScore}
              {moment(comment.timestamp).format('LL')}
            </li>)}
        </div>
      </div>
    );
  }
}

export default PostPage;
