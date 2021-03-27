import React from 'react';
import Post from '../components/Post';
import CommentList from '../components/CommentList';
import CommentWrite from '../components/CommentWrite';

const PostDetail = (props) => {
  return (
    <React.Fragment>
      <Post />
      <CommentWrite />
      <CommentList />
    </React.Fragment>
  );
};

export default PostDetail;
