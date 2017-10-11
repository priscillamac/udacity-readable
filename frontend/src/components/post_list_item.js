import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { connect } from 'react-redux';
import { deletePost } from '../actions';

class PostListItem extends Component {
  onDelete() {
    this.props.deletePost(this.props.id);
  }

  render() {
    const {
      id,
      body,
      title,
      category,
      timestamp,
      author,
      voteScore
    } = this.props;
    return (
      <li className="post-list-item" key={id}>
        <Link className="title" to={`/category/${category}/${id}`}>
          <h3>
            {title}
          </h3>
        </Link>
        <p className="description">
          {body}
        </p>
        <p>
          Category: <Link to={`/category/${category}`}>{category}</Link>
        </p>
        <p>
          vote Score: {voteScore}
        </p>
        <p>
          author: {author}
        </p>
        {moment(timestamp).format('LL')}
        <button onClick={this.onDelete.bind(this)}>DELETE</button>
      </li>
    );
  }
}

const mapStateToProps = ({ postsReducer }) => ({ postsReducer });

export default connect(mapStateToProps, {
  deletePost
})(PostListItem);
