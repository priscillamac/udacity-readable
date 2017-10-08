import React, { Component } from 'react';
import '../styles/app.css';
import { Link, Route } from 'react-router-dom';
import MainPage from './main_page';
import CreatePost from './create_post';
import { connect } from 'react-redux';
import { selectCategory } from '../actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: ''
    };
  }

  handleSelectCategory(category) {
    this.props.selectCategory(category);
    this.setState({ selectedCategory: category });
  }
  render() {
    console.log(this.props);
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

        <p onClick={this.handleSelectCategory.bind(this, 'swag')}>test</p>

        <Route exact path="/" component={MainPage} />
        <Route path="/create" component={CreatePost} />
      </div>
    );
  }
}

function mapStateToProps(selectedCategory) {
  return {
    selectedCategory
  };
}

export default connect(mapStateToProps, {
  selectCategory
})(App);
