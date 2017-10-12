import React, { Component } from 'react';
import PostsList from './posts_list';
import CommentListItem from './comment_list_item';
import { connect } from 'react-redux';
import { fetchPostDetails, fetchComments } from '../actions';

function sortByDate(desc = true) {
  if (desc) {
    return (a, b) => new Date(b.timestamp) - new Date(a.timestamp);
  }

  return (a, b) => new Date(a.timestamp) - new Date(b.timestamp);
}

class PostDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDescending: true
    };
  }

  componentDidMount() {
    const postId = this.props.match.params.posts_id;
    this.props.fetchComments(postId);
    this.props.fetchPostDetails(postId);
  }

  render() {
    const { comments, post } = this.props;
    const postId = this.props.match.params.posts_id;

    return (
      <div className="post-detail">
        <h1>
          {post.title}
        </h1>
        <PostsList
          posts={post.filter(post => post.id === postId)}
        />
        {/* <PostListItem
          id={post.id}
          body={post.body}
          title={post.title}
          category={post.category}
          timestamp={post.timestamp}
          author={post.author}
          voteScore={post.voteScore}
         /> */}

        <div className="comment-section">
          <h2>Comments</h2>
          {comments.sort(sortByDate(this.state.isDescending)).map(comment =>
            <CommentListItem key={comment.id} {...comment}/>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ postsReducer, commentsReducer }) => ({
  post: postsReducer.posts,
  comments: commentsReducer.comments
});

export default connect(mapStateToProps, {
  fetchComments,
  fetchPostDetails
})(PostDetail);
