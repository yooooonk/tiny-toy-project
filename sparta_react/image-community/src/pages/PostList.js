import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Post from '../components/Post';
import { actionCreators as postAction } from '../redux/modules/post';
const PostList = (props) => {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list);

  useEffect(() => {
    dispatch(postAction.getPostFB());
  }, []);
  return (
    <div>
      {post_list.map((p, idx) => {
        return <Post key={p.id} {...p} />;
      })}
    </div>
  );
};

export default PostList;
