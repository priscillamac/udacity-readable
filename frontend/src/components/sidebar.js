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
    const path = this.props.location.pathname;
    return (
      <div className="sidebar">
        <Link to="/create">
          <button>Add New Post</button>
        </Link>
        <h3>Categories</h3>
        <ul>
          <li><Link className={(path === `/`) ? 'active' : ''} to="/" onClick={this.handleSelectCategory.bind(this, '')}>
            View All
          </Link></li>
          {categories.map(category =>
            <li key={category.name}>
              <Link
                to={`/category/${category.path}`}
                className={path.startsWith(`/category/${category.name}`) ? 'active' : ''}
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
