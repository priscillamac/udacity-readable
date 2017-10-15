import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <header className="navigation">
        <div className="container">
          <Link to="/">
            <h1>Readable</h1>
          </Link>
        </div>
      </header>
    );
  }
}

export default Navigation;
