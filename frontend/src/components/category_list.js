import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as ReadableAPI from '../utils/readable_api';
import { connect } from 'react-redux';
import { setCategory } from '../actions';

class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryName: '',
      categories: []
    };
  }

  componentDidMount() {
    ReadableAPI.getAllCategories().then(categories => {
      this.setState({ categories });
    });
  }

  handleSelectCategory(categoryName) {
    this.props.setCategory(categoryName);
    this.setState({ setCategory: categoryName });
  }

  render() {
    const { categories } = this.state;
    return (
      <div className="category-list">
        Categories:
        <ul>
          {categories.map(category =>
            <li key={category.name}>
              <Link to={`/category/${category.path}`} onClick={this.handleSelectCategory.bind(this, category.name)}
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

function mapStateToProps(categoryReducer) {
  return {
    categoryReducer
  };
}

export default connect(mapStateToProps, {
  setCategory
})(CategoryList);
