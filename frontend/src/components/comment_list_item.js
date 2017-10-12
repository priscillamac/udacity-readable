import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { deleteComment, upvoteComment, downvoteComment } from '../actions';

class CommentListItem extends Component {
  onDeleteComment() {
    this.props.deleteComment(this.props.id);
  }
  onEditComment() {
    console.log('on edit comment clicked');
  }
  onClickUpvote() {
    this.props.upvoteComment(this.props.id);
  }
  onClickDownvote() {
    this.props.downvoteComment(this.props.id);
  }

  render() {
    const { author, body, voteScore, timestamp } = this.props;
    return (
      <li>
        <p>
          author: {author}
        </p>
        <div>
          body:{body}
        </div>
        <p>
          vote: {voteScore}
          <button onClick={this.onClickUpvote.bind(this)}>upvote</button>
          <button onClick={this.onClickDownvote.bind(this)}>downvote</button>
        </p>
        <p>
          date: {moment(timestamp).format('LL')}
        </p>
        <button onClick={this.onDeleteComment.bind(this)}>DELETE</button>
        <button onClick={this.onEditComment.bind(this)}>Edit</button>
      </li>
    );
  }
}

const mapStateToProps = ({ commentsReducer }) => ({ commentsReducer });

export default connect(mapStateToProps, {
  deleteComment,
  downvoteComment,
  upvoteComment
})(CommentListItem);
