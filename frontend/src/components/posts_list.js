import React, { Component } from 'react';
import PostListItem from './post_list_item';
import { Link } from 'react-router-dom';

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

    if (!hasPosts) {
      return (
        <div>
          <p>
            {categoryName
              ? `No posts for ${categoryName} exists`
              : 'No posts exist'}
          </p>
          <Link to="/create" role="button">
            <button>Create a new post</button>
          </Link>
        </div>
      );
    }

    return (
      <div className="posts-list">
        <p className="sort-by" onClick={this.handleSortPostsClick.bind(this)}>
          Sort by date:
          {isDescending ? 'up arrow' : 'down arrow'}
        </p>
        <ul>
          {posts
            .sort(sortByDate(this.state.isDescending))
            .map(post => <PostListItem key={post.id} {...post} />)}
        </ul>
      </div>
    );
  }
}

export default PostsList;
