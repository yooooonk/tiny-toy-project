import React from 'react';
import Post from '../components/Post';

const PostList = (props) => {
  const { history } = props;
  return (
    <div>
      <Post />
    </div>
  );
};

export default PostList;
