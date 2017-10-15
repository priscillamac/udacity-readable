import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { editPost } from '../actions';

class EditPost extends Component {
  componentDidMount() {
    const selectedPostId = this.props.match.params.posts_id;
    const initialValues = this.props.postsReducer.posts
      .filter(post => post.id === selectedPostId)
      .map(post => post);

    const postValues = initialValues[0];
    this.props.initialize({
      author: postValues.author,
      title: postValues.title,
      body: postValues.body,
      category: postValues.category
    });
  }

  handleFormSubmit({ author, title, body, category }) {
    const selectedPostId = this.props.match.params.posts_id;
    const initialValues = this.props.postsReducer.posts
      .filter(post => post.id === selectedPostId)
      .map(post => post);

    const postValues = initialValues[0];
    const postObject = {
      id: selectedPostId,
      timestamp: Date.now(),
      category,
      body,
      title,
      author,
      voteScore: postValues.voteScore,
      deleted: postValues.deleted
    };
    this.props.editPost(postObject, selectedPostId);
    this.props.history.goBack();
  }

  onClickBack() {
    this.props.history.goBack();
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <h1>Editing Post</h1>
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <label>Name</label>
          <Field
            name="author"
            component="input"
            type="text"
            placeholder="Enter Your Name"
            required
          />
          <label>Post Title</label>
          <Field
            name="title"
            component="input"
            type="text"
            placeholder="Title"
            required
          />
          <label>Post Description</label>
          <Field name="body" component="textarea" required />
          <label>Category</label>
          <Field name="category" component="select" required>
            <option value="" disabled>
              Select Category
            </option>
            <option value="react">React</option>
            <option value="redux">Redux</option>
            <option value="udacity">Udacity</option>
          </Field>
          <button type="submit">Submit</button>
        </form>
        <button onClick={this.onClickBack.bind(this)}>go back</button>
      </div>
    );
  }
}

const mapStateToProps = ({ postsReducer }) => ({
  postsReducer
});

EditPost = connect(mapStateToProps, {
  editPost
})(EditPost);

export default reduxForm({
  form: 'createPostForm'
})(EditPost);
