import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const PostListItem = ({
  id,
  body,
  title,
  category,
  timestamp,
  author,
  voteScore
}) =>
  <li className="post-list-item" key={id}>
    <Link className="title" to={`/category/${category}/${id}`}>
      <h3>
        {title}
      </h3>
    </Link>
    <p className="description">
      {body}
    </p>
    <p>
      Category: <Link to={`/category/${category}`}>{category}</Link>
    </p>
    <p>
      vote Score: {voteScore}
    </p>
    <p>
      author: {author}
    </p>
    {moment(timestamp).format('LL')}
  </li>;

export default PostListItem;
