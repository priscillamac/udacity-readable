import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCategory, fetchCategories } from '../actions';

class Sidebar extends Component {
  handleSelectCategory(categoryName) {
    this.props.setCategory(categoryName);
  }

  render() {
    const { categories } = this.props;
    return (
      <div className="sidebar">
        <Link to="/create">
          <button>Add New Post</button>
        </Link>
        <h3>Categories:</h3>
        <ul>
          <li><Link to="/" onClick={this.handleSelectCategory.bind(this, '')}>
            View All
          </Link></li>
          {categories.map(category =>
            <li key={category.name}>
              <Link
                to={`/category/${category.path}`}
                onClick={this.handleSelectCategory.bind(this, category.name)}
              >
                {category.name}
              </Link>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ categoryReducer }) => ({
  categories: categoryReducer.categories
});

export default connect(mapStateToProps, {
  setCategory,
  fetchCategories
})(Sidebar);
