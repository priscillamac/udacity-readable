import React, { Component } from 'react';
import '../styles/app.css';
import { Route, withRouter } from 'react-router-dom';
import MainPage from './main_page';
import CreatePost from './create_post';
import CategoryPage from './category_page';
import PostDetail from './post_detail';
import Sidebar from './sidebar';
import EditPost from './edit_post';
import Navigation from './navigation';
import { connect } from 'react-redux';
import { fetchCategories, fetchPosts } from '../actions';

class App extends Component {
  componentDidMount() {
    this.props.fetchCategories();
    this.props.fetchPosts();
  }

  render() {
    const { posts } = this.props;
    return (
      <div className="app">
        <Navigation />
        <div className="container main-wrapper">
          <Sidebar {...this.props} />
          <Route exact path="/" render={() => <MainPage posts={posts} />} />
          <Route
            exact
            path={`/category/:category_name`}
            render={props => <CategoryPage {...props} posts={posts} />}
          />
          <Route
            exact
            path={`/category/:category_name/:posts_id`}
            render={props => <PostDetail {...props} />}
          />
          <Route path="/create" component={CreatePost} />
          <Route
            path="/category/:category_name/:posts_id/edit"
            component={EditPost}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ categoryReducer, postsReducer }) => ({
  categoryReducer,
  posts: postsReducer.posts
});

export default withRouter(
  connect(mapStateToProps, {
    fetchCategories,
    fetchPosts
  })(App)
);
