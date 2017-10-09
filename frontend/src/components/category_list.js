import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCategory, fetchCategories } from '../actions';

class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryName: ''
    };
  }

  handleSelectCategory(categoryName) {
    this.props.setCategory(categoryName);
    this.setState({ setCategory: categoryName });
  }

  render() {
    const { categories } = this.props;
    return (
      <div className="category-list">
        Categories:
        <ul>
          <Link to="/" onClick={this.handleSelectCategory.bind(this, '')}>
            View All
          </Link>
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
})(CategoryList);
