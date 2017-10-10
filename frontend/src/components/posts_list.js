import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

function sortByDate(desc = true) {
  if (desc) {
    return (a, b) => new Date(b.timestamp) - new Date(a.timestamp);
  }

  return (a, b) => new Date(a.timestamp) - new Date(b.timestamp);
}

class PostsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDescending: false
    };
  }

  handleSortPostsClick() {
    this.setState(prevState => ({
      isDescending: !prevState.isDescending
    }));
  }

  render() {
    const { posts, categoryName } = this.props;
    const { isDescending } = this.state;
    const hasPosts = posts.length >= 1;

    return (
      <div className="posts-list">
        <p className="sort-by" onClick={this.handleSortPostsClick.bind(this)}>
          Sort by date:
          {isDescending
            ? 'up arrow'
            : 'down arrow'
          }
        </p>
        <ul>
          {!hasPosts &&
            <p>
              There are no posts for {categoryName}
            </p>}
          {hasPosts &&
            posts.sort(sortByDate(this.state.isDescending)).map(post =>
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
