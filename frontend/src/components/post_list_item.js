import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { connect } from 'react-redux';
import { deletePost, fetchComments } from '../actions';
import { withRouter } from "react-router-dom";

class PostListItem extends Component {
  componentDidMount() {
    this.props.fetchComments(this.props.id);
  }
  onDelete() {
    this.props.deletePost(this.props.id);
    // this redirects back to home if a user deletes a comment.
    // needs withRouter to work
    this.props.history.push("/");
  }

  render() {
    const {
      id,
      body,
      title,
      category,
      timestamp,
      author,
      voteScore,
      commentsReducer: { comments }
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
        <p>Comments: {comments.length}</p>
        {moment(timestamp).format('LL')}
        <button onClick={this.onDelete.bind(this)}>DELETE</button>
      </li>
    );
  }
}

const mapStateToProps = ({ postsReducer, commentsReducer }) => ({ postsReducer, commentsReducer });

export default withRouter(connect(mapStateToProps, {
  fetchComments,
  deletePost
})(PostListItem));
