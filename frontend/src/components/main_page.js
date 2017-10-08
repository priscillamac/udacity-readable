import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as ReadableAPI from '../utils/readable_api';
import moment from 'moment';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      posts: []
    };
  }

  componentDidMount() {
    ReadableAPI.getAllCategories().then(categories => {
      this.setState({ categories });
    });

    ReadableAPI.getAllPosts().then(posts => {
      this.setState({ posts });
    });
  }

  render() {
    const { categories, posts } = this.state;

    return (
      <div className="main-page">
        main_page.js
        <div className="categories-list">
          Categories:
          <ul>
            {categories.map(category =>
              <li key={category.name}>
                <Link to={`/${category.path}`}>
                  {category.name}
                </Link>
              </li>
            )}
          </ul>
        </div>
        <div className="posts-wrapper">
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
                  <Link to={`/${post.category}`}>{post.category}</Link>
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
      </div>
    );
  }
}

export default MainPage;
