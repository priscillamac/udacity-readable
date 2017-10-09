import React, { Component } from 'react';
import '../styles/app.css';
import { Route } from 'react-router-dom';
import MainPage from './main_page';
import CreatePost from './create_post';
import CategoryPage from './category_page';
import PostPage from './post_page';
import CategoryList from './category_list';
import Navigation from './navigation';
import * as ReadableAPI from '../utils/readable_api';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions';

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

    ReadableAPI.getAllCategories().then(categories => {
      this.props.fetchCategories(categories);
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
          exact path={`/category/:category_name`}
          render={(props) => (<CategoryPage {...props} posts={posts}/>)}
        />
        <Route
          path={`/category/:category_name/:posts_id`}
          render={(props) => (<PostPage {...props} posts={posts} />)}
        />
        <Route path="/create" component={CreatePost} />
      </div>
    );
  }
}

function mapStateToProps(categoryReducer) {
  return {
    categoryReducer
  };
}

export default connect(mapStateToProps, {
  fetchCategories
})(App);
