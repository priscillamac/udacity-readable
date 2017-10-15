import React, { Component } from 'react';
import PostsList from './posts_list';

class CategoryPage extends Component {
  render() {
    const { posts } = this.props;
    const categoryName = this.props.match.params.category_name;

    return (
      <div className="category-page hide-description">
        <h2>{categoryName}</h2>
        <PostsList
          posts={posts.filter(post => post.category === categoryName)}
          categoryName={categoryName}
        />
      </div>
    );
  }
}

export default CategoryPage;
