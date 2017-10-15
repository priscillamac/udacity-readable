import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { deleteComment, upvoteComment, downvoteComment } from '../actions';
import EditComment from './edit_comment';
import FaAngleUp from 'react-icons/lib/fa/angle-up';
import FaAngleDown from 'react-icons/lib/fa/angle-down';

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
      <li className="comment-list-item">
        <div className="vote-mechanism">
          <FaAngleUp
            size={20}
            style={{
              cursor: 'pointer'
            }}
            onClick={this.onClickUpvote.bind(this)}
          />
          <div className="vote-score">
            {voteScore}
          </div>
          <FaAngleDown
            size={20}
            style={{
              cursor: 'pointer'
            }}
            onClick={this.onClickDownvote.bind(this)}
          />
        </div>
        <div className="content">
          <div className="author">
            {author}
          </div>
          <div className="body">
            {body}
          </div>
          <div className="info">
            {moment(timestamp).format('LL')} • <span onClick={this.onEditComment.bind(this)}>Edit</span> | <span onClick={this.onDeleteComment.bind(this)}>Delete</span>
          </div>
        </div>
        {/* <button onClick={this.onDeleteComment.bind(this)}>DELETE</button>
        <button onClick={this.onEditComment.bind(this)}>Edit</button> */}
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
