import React, { Component } from 'react';
import * as ReadableAPI from '../utils/readable_api';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }

  componentDidMount() {
    ReadableAPI.getCategories().then(categories => {
      this.setState({ categories })
    });
    console.log(this.state.categories);
  }

  render() {
    const { categories } = this.state;
    console.log(this.state.categories);
    return (
      <div className="main-page">
        Homepage y'all
        <div className="categories-list">
          Categories:
          <ul>
            {categories.map(category =>
              <li key={category.name}>
                {category.name}
              </li>
            )}
          </ul>
        </div>
        <div className="posts-wrapper">
          this is where each post will go
          <ul>
            <li>I am a post</li>
            <li>I am a post</li>
            <li>I am a post</li>
            <li>I am a post</li>
            <li>I am a post</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default MainPage;
