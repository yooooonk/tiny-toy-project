import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { firestore, realtime } from '../../shared/firebase';
import firebase from 'firebase/app';
import 'moment';
import moment from 'moment';
import { actionCreators as postActions } from './post';

const SET_COMMENT = 'SET_COMMENT';
const ADD_COMMENT = 'ADD_COMMENT';

const LOADING = 'LOADING';

const setComment = createAction(SET_COMMENT, (post_id, comment_list) => ({
  post_id,
  comment_list
}));
const addComment = createAction(ADD_COMMENT, (post_id, comment) => ({
  post_id,
  comment
}));

const loading = createAction(LOADING, (is_loading) => ({ is_loading }));

const initialState = {
  list: {},
  is_loading: false
};

const getCommentFB = (post_id) => {
  return function (dispatch, getState, { history }) {
    if (!post_id) return;

    const commentDB = firestore.collection('comment');
    commentDB
      .where('post_id', '==', post_id)
      .orderBy('insert_dt', 'desc')
      .get()
      .then((docs) => {
        let list = [];

        docs.forEach((doc) => {
          list.push({ ...doc.data(), id: doc.id });
        });

        dispatch(setComment(post_id, list));
      })
      .catch((err) => {
        console.log('댓글 정보를 가져올 수 없어요', err);
      });
  };
};

const addCommentFB = (post_id, contents) => {
  return function (dispatch, getState, { history }) {
    const commentDB = firestore.collection('comment');
    const user_info = getState().user.user;
    console.log('post+od', post_id);
    let comment = {
      post_id: post_id,
      user_id: user_info.uid,
      user_name: user_info.user_name,
      user_profile: user_info.user_profile,
      contents: contents,
      insert_dt: moment().format('YYYY-MM-DD hh:mm:ss')
    };

    commentDB.add(comment).then((doc) => {
      const postDB = firestore.collection('post');

      const post = getState().post.list.find((l) => l.id === post_id);

      const increment = firebase.firestore.FieldValue.increment(1);

      comment = { ...comment, id: doc.id };
      postDB
        .doc(post_id)
        .update({ comment_cnt: increment })
        .then((_post) => {
          dispatch(addComment(post_id, comment));

          if (post) {
            dispatch(
              postActions.editPost(post_id, {
                comment_cnt: parseInt(post.comment_cnt) + 1
              })
            );
            //게시글을 작성한 사람한테 알람이 감, comment 쓴 사람이랑 내 id랑 비교해서 처리해야함
            const _noti_titem = realtime
              .ref(`noti/${post.user_info.user_id}/list`)
              .push(); // 공간을 일단 할당

            _noti_titem.set(
              {
                post_id: post.id,
                user_name: comment.user_name,
                image_url: post.image_url,
                insert_dt: comment.insert_dt
              },
              (err) => {
                if (err) {
                  console.log('알림저장 실패', err);
                } else {
                  const notiDB = realtime.ref(`noti/${post.user_info.user_id}`);
                  notiDB.update({ read: false });
                }
              }
            );
          }
        });
    });
  };
};

export default handleActions(
  {
    [SET_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        // let data={[post_id]:com_list,...}  -- 매번 db호출을 안하기위해
        draft.list[action.payload.post_id] = action.payload.comment_list;
      }),
    [ADD_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list[action.payload.post_id].unshift(action.payload.comment);
      }),
    [LOADING]: (state, action) =>
      produce(state, (draft) => {
        draft.is_loading = action.payload.is_loading;
      })
  },
  initialState
);

const actionCreators = {
  getCommentFB,
  setComment,
  addComment,
  addCommentFB
};

export { actionCreators };
