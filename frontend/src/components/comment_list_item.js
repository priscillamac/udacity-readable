import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { deleteComment } from '../actions';

class CommentListItem extends Component {
  onDelete() {
    this.props.deleteComment(this.props.id);
  }

  render() {
    const {
      author,
      body,
      voteScore,
      timestamp
    } = this.props;
    return (
      <li>
        {author}
        {body}
        {voteScore}
        {moment(timestamp).format('LL')}
        <button onClick={this.onDelete.bind(this)}>DELETE</button>
      </li>
    );
  }
}

const mapStateToProps = ({ commentsReducer }) => ({ commentsReducer });

export default connect(mapStateToProps, {
  deleteComment
})(CommentListItem);
