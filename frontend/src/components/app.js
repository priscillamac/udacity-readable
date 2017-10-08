import React, { Component } from 'react';
import '../styles/app.css';
import { Link, Route } from 'react-router-dom';
import MainPage from './main_page';
import CreatePost from './create_post';
import CategoryPage from './category_page';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="navigation">
          <div className="container">
            <Link to="/">
              <h2>Title</h2>
            </Link>
            <Link to="/create" role="button">
              <button>Create Post</button>
            </Link>
          </div>
        </header>
        {/* <Route path="/create" render={() => (
            <CreatePost />
          )} /> */}

        {/* <p onClick={this.handleSelectCategory.bind(this, 'react')}>test</p> */}


        <Route exact path="/" component={MainPage} />
      <Route path={`/category/:category_name`} component={CategoryPage} />
        {/* <Route path="/category/:category_name" component={CategoryPage} /> */}
        <Route path="/create" component={CreatePost} />
      </div>
    );
  }
}

export default App;
