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

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <h1>this is the edit post page</h1>
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
