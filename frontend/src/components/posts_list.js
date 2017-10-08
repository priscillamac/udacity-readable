import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

class PostsList extends Component {
  render() {
    const { posts, categoryName } = this.props;
    const hasPosts = posts.length >= 1;

    return (
      <div className="posts-list">
        <ul>
          {!hasPosts &&
            <p>There are no posts for {categoryName}</p>
          }
          {hasPosts && posts.map(post =>
            <li key={post.id}>
              <h3>
                <Link to={`/category/${post.category}/${post.id}`}>
                {post.title}
                </Link>
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
