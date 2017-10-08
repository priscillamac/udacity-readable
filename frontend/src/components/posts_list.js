import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

class PostsList extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div className="category-list">
        <ul>
          {posts.map(post =>
            <li key={post.id}>
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
            </li>
          )}
        </ul>
      </div>
    );
  }
}


export default PostsList;
