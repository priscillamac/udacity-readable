import React, { Component } from 'react';
import PostListItem from './post_list_item';
import { Link } from 'react-router-dom';
import { sortByDate } from '../services';
import { connect } from 'react-redux';
import { sortByNewest, sortByOldest } from '../actions';

class PostsList extends Component {
  onChangeSortBy = (event) => {
    const value = event.target.value;
    switch (value) {
      case 'newest':
        return this.props.sortByNewest();
      case 'oldest':
        return this.props.sortByOldest();
      default:
        return this.props.sortByNewest();
    }
  }

  render() {
    const { posts, categoryName, sortBy } = this.props;
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
        <p className="sort-by">
          <label>Sort by:</label>
          <select
            onChange={this.onChangeSortBy.bind(this)}
          >
            <option value="newest">
              Newest
            </option>
            <option value="oldest">
              Oldest
            </option>
          </select>
        </p>
        <ul>
          {posts
            .sort(sortByDate(sortBy.newest))
            .map(post => <PostListItem key={post.id} {...post} />)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ postsReducer }) => ({
  sortBy: postsReducer.sortBy
});

export default connect(mapStateToProps, {
  sortByNewest,
  sortByOldest,
})(PostsList);
