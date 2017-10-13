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
        <h2>Create a post</h2>
        <div>
          <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
            <div>
              <label>Your Name</label>
              <div>
                <Field
                  name="author"
                  component="input"
                  type="text"
                  placeholder="Name"
                />
              </div>
            </div>
            <div>
              <label>Title</label>
              <div>
                <Field
                  name="title"
                  component="input"
                  type="text"
                  placeholder="Title"
                />
              </div>
            </div>
            <div>
              <label>Category</label>
              <div>
                <Field name="category" component="select" required>
                  <option />
                  <option value="react">
                    React
                  </option>
                  <option value="redux">Redux</option>
                  <option value="udacity">Udacity</option>
                </Field>
              </div>
            </div>
            <div>
              <label>Description</label>
              <div>
                <Field name="body" component="textarea" />
              </div>
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
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
