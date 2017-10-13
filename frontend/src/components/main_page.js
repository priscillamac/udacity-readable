import React, { Component } from 'react';
import PostsList from './posts_list';

class MainPage extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div className="main-page">
        <PostsList posts={posts}/>
      </div>
    );
  }
}

export default MainPage;
