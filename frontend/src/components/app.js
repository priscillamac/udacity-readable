import React, { Component } from 'react';
import '../styles/app.css';
import { Route } from 'react-router-dom';
import MainPage from './main_page';
import CreatePost from './create_post';
import CategoryPage from './category_page';
import CategoryList from './category_list';
import Navigation from './navigation';
import * as ReadableAPI from '../utils/readable_api';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    ReadableAPI.getAllPosts().then(posts => {
      this.setState({ posts });
    });
  }

  render() {
    const { posts } = this.state;
    return (
      <div className="app">
        <Navigation />
        <CategoryList />
        <Route exact path="/" render={() => <MainPage posts={posts} />} />
        <Route
          path={`/category/:category_name`}
          render={(props) => (<CategoryPage {...props} posts={posts}/>)}
        />
        <Route path="/create" component={CreatePost} />
      </div>
    );
  }
}
export default App;
