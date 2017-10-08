import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
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
    );
  }
}

export default Navigation;
