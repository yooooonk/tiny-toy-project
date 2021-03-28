import React from 'react';
import Post from '../components/Post';
import CommentList from '../components/CommentList';
import CommentWrite from '../components/CommentWrite';
import { useSelector } from 'react-redux';
import { firestore } from '../shared/firebase';
const PostDetail = (props) => {
  const { list } = useSelector((state) => state.post);
  const { user } = useSelector((state) => state.user);
  const id = props.match.params.id;
  const idx = list.findIndex((p) => p.id === id);
  const post_data = list[idx];
  const [post, setPost] = React.useState(post_data ? post_data : null);

  React.useEffect(() => {
    if (post) return;
    const postDB = firestore.collection('post');
    postDB
      .doc(id)
      .get()
      .then((doc) => {
        let _post = doc.data();
        let post = Object.keys(_post).reduce(
          (acc, cur) => {
            if (cur.indexOf('user_') !== -1) {
              return {
                ...acc,
                user_info: { ...acc.user_info, [cur]: _post[cur] }
              };
            }
            return { ...acc, [cur]: _post[cur] };
          },
          { id: doc.id, user_info: {} }
        );

        setPost(post);
      });
  });
  return (
    <React.Fragment>
      {post && (
        <Post {...post} is_me={post.user_info.user_id === user.user_id} />
      )}
      <CommentWrite />
      <CommentList />
    </React.Fragment>
  );
};

export default PostDetail;
