import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { deleteComment, upvoteComment, downvoteComment } from '../actions';
import EditComment from './edit_comment';

class CommentListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEditForm: false
    };
  }

  onDeleteComment() {
    this.props.deleteComment(this.props.id);
  }

  onEditComment() {
    this.setState({ showEditForm: true });
  }

  onCloseForm() {
    this.setState({ showEditForm: false });
  }

  onClickUpvote() {
    this.props.upvoteComment(this.props.id);
  }

  onClickDownvote() {
    this.props.downvoteComment(this.props.id);
  }

  render() {
    const { showEditForm } = this.state;
    const { author, body, voteScore, timestamp, id } = this.props;
    const initialValues = this.props.initialValues.comments
      .filter(comment => comment.id === id)
      .map(comment => comment);
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
        {showEditForm &&
          <EditComment
            id={id}
            initialValues={initialValues}
            onCloseForm={this.onCloseForm.bind(this)}
          />}
      </li>
    );
  }
}

const mapStateToProps = ({ commentsReducer }) => ({
  commentsReducer,
  initialValues: commentsReducer
});

export default connect(mapStateToProps, {
  deleteComment,
  upvoteComment,
  downvoteComment
})(CommentListItem);
