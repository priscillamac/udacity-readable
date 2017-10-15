import React, { Component } from 'react';
import PostsList from './posts_list';

class MainPage extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div className="main-page hide-description">
        <h2>All Posts</h2>
        <PostsList posts={posts}/>
      </div>
    );
  }
}

export default MainPage;
