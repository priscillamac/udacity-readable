import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

class CommentListItem extends Component {
  render() {
    const {
      id,
      author,
      body,
      voteScore,
      timestamp
    } = this.props;
    return (
      <li key={id}>
        <p>{author}</p>
        {body}
        {voteScore}
        {moment(timestamp).format('LL')}
      </li>
    );
  }
}

export default CommentListItem;
