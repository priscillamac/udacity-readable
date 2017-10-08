import React, { Component } from 'react';
import PostsList from './posts_list';

class CategoryPage extends Component {
  render() {
    const { posts } = this.props;
    const categoryName = this.props.match.params.category_name;

    return (
      <div>
        <h1>category page for {categoryName}</h1>
        <PostsList
          posts={posts.filter(post => post.category === categoryName)}
        />
      </div>
    );
  }
}

export default CategoryPage;
