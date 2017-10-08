import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

class PostPage extends Component {
  render() {
    const { posts } = this.props;
    const postId = this.props.match.params.posts_id;
    return (
      <div>
        <h1>
          This is the post page for {postId}
        </h1>
        {posts.filter(post => post.id === postId).map(post =>
          <div key={post.id}>
            <h3>
              {post.title}
            </h3>
            <p className="description">
              {post.body}
            </p>
            <p>
              Category:{' '}
              <Link to={`/category/${post.category}`}>{post.category}</Link>
            </p>
            <p>
              vote Score: {post.voteScore}
            </p>
            <p>
              author: {post.author}
            </p>
            {moment(post.timestamp).format('LL')}
          </div>
        )}
      </div>
    );
  }
}

export default PostPage;
