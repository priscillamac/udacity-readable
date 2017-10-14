import React, { Component } from 'react';
import { Field, reduxForm, reset } from 'redux-form';
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
    console.log('submitted form');
    console.log(this.props.id);
    // this.props.editComment(this.props.id);
    // const commentObject = {
    //   id: this.props.id,
    //   timestamp: Date.now(),
    //   author,
    //   body,
    //   parentId: this.props.parentId
    // };
    this.props.editComment();
  }
  // onEditComment() {
  //   const { id } = this.props;
  //   const test = this.props.initialValues.comments
  //     .filter(comment => comment.id === id)
  //     .map(comment => comment);
  //   this.props.initialize({ author: 'some value here', body: 'body' });
  //
  //   console.log('initialValues comments', this.props.initialValues.comments);
  //   console.log('test', test[0]);
  //   console.log('on edit comment clicked');
  //   console.log('id', id);
  //   console.log('initial values', this.props.initialValues);
  //   // this.props.initialize(test);
  // }
  render() {
    const { id, onCloseForm } = this.props;
    return (
      <div className="swag">
        <form>
          <div>
            <label>Your Name</label>
            <div>
              <Field
                name="author"
                component="input"
                type="text"
                placeholder="Name"
                required
                autoFocus
              />
            </div>
          </div>
          <div>
            <label>Comment</label>
            <div>
              <Field
                name="body"
                component="input"
                type="text"
                placeholder="Leave a comment"
                required
              />
            </div>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
        <div className="overlay" onClick={() => onCloseForm()}></div>
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
