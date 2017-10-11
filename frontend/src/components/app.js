import React, { Component } from 'react';
import '../styles/app.css';
import { Route, withRouter } from 'react-router-dom';
import MainPage from './main_page';
import CreatePost from './create_post';
import CategoryPage from './category_page';
import PostDetail from './post_detail';
import CategoryList from './category_list';
import Navigation from './navigation';
import { connect } from 'react-redux';
import { fetchCategories, fetchPosts } from '../actions';

class App extends Component {
  componentDidMount() {
    this.props.fetchCategories();
    this.props.fetchPosts();
  }

  render() {
    const { postsReducer: { posts } } = this.props;
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
          render={(props) => (<PostDetail {...props} />)}
        />
        <Route path="/create" component={CreatePost} />
      </div>
    );
  }
}

const mapStateToProps = ({ categoryReducer, postsReducer }) => ({
  categoryReducer,
  postsReducer
});

export default withRouter(connect(mapStateToProps, {
  fetchCategories,
  fetchPosts
})(App));
