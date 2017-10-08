import React, { Component } from 'react';
import PostsList from './posts_list';

class MainPage extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div className="main-page">
        <div className="posts-wrapper">
          <PostsList posts={posts}/>
        </div>
      </div>
    );
  }
}

export default MainPage;
