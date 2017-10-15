import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { editComment } from '../actions';

class EditComment extends Component {
  componentDidMount() {
    const initialValues = this.props.initialValues[0];
    this.props.initialize({
      author: initialValues.author,
      body: initialValues.body
    });
  }

  handleFormSubmit({ author, body }) {
    const comment = this.props.initialValues[0];

    const commentObject = {
      id: comment.id,
      parentId: comment.parentId,
      timestamp: Date.now(),
      body,
      author,
      voteScore: comment.voteScore,
      deleted: comment.deleted,
      parentDeleted: comment.parentDeleted
    };

    this.props.editComment(commentObject, comment.id);
    this.props.onCloseForm();
  }

  render() {
    const { handleSubmit, onCloseForm } = this.props;
    return (
      <div className="edit-comment">
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <h3>Edit Comment</h3>
          <label>Name</label>
          <Field
            name="author"
            component="input"
            type="text"
            placeholder="Name"
            required
            autoFocus
          />
          <label>Comment</label>
          <Field
            name="body"
            component="input"
            type="text"
            placeholder="Leave a comment"
            required
          />
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
        <div className="overlay" onClick={() => onCloseForm()} />
      </div>
    );
  }
}

const mapStateToProps = ({ commentsReducer }) => ({
  commentsReducer
});

EditComment = connect(mapStateToProps, {
  editComment
})(EditComment);

export default reduxForm({
  form: 'editCommentForm'
})(EditComment);
