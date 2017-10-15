import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../actions';
import { Field, reduxForm } from 'redux-form';

class CreatePost extends Component {
  handleFormSubmit({ author, title, body, category }) {
    const uniqueId = Math.random().toString(36).substr(-20);
    const postObject = {
      id: uniqueId,
      timestamp: Date.now(),
      category,
      body,
      title,
      author
    };
    this.props.createPost(postObject);
    this.props.history.push('/');
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="create-post">
        <h2>Add New Post</h2>
        <div>
          <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
            <label>Name</label>
            <Field
              name="author"
              component="input"
              type="text"
              placeholder="Enter your name"
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
            <Field name="body" component="textarea" required/>
            <label>Category</label>
            <Field name="category" component="select" required>
              <option value="" disabled selected>
                Select Category
              </option>
              <option value="react">React</option>
              <option value="redux">Redux</option>
              <option value="udacity">Udacity</option>
            </Field>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ postsReducer }) => ({
  postsReducer
});

CreatePost = connect(mapStateToProps, {
  createPost
})(CreatePost);

export default reduxForm({
  form: 'createPostForm'
})(CreatePost);
