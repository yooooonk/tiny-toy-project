import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import moment from 'moment';
import { firestore } from '../../shared/firebase';

// actions
const SET_POST = 'SET_POST';
const ADD_POST = 'ADD_POST';

// action creators
const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post) => ({ post }));

// initialState
const initialState = {
  list: []
};

const initialPost = {
  /* id: 0,
  user_info: {
    user_name: 'yoonk',
    user_profile:
      'https://lh3.googleusercontent.com/proxy/MCgGmXjcM_iYuvWaK97dlU3aNCgvG6wP2S3R1UpXlAJbPrtVV-3UcM6L0uEm1wg2IPatBkZ7pdnkDtAoAjArNIarhMq_rgVUfHxVLY2JJhV2pOP74XKgArRRSImOwU3y85ZtCaa1_Z9dT7dvCOiPo8G6UH52KmU7vP4xptxlJLKOMHEP9ixIvf82Wqmg'
  }, */
  image_url:
    'https://lh3.googleusercontent.com/proxy/MCgGmXjcM_iYuvWaK97dlU3aNCgvG6wP2S3R1UpXlAJbPrtVV-3UcM6L0uEm1wg2IPatBkZ7pdnkDtAoAjArNIarhMq_rgVUfHxVLY2JJhV2pOP74XKgArRRSImOwU3y85ZtCaa1_Z9dT7dvCOiPo8G6UH52KmU7vP4xptxlJLKOMHEP9ixIvf82Wqmg',
  contents: '',
  comment_cnt: 0,
  insert_dt: moment().format('YYYY-MM-DD hh:mm:ss')
};

// middleware actions
const getPostFB = () => {
  return function (dispatch, getState, { history }) {
    const postDB = firestore.collection('post');

    postDB.get().then((docs) => {
      let post_list = [];
      docs.forEach((doc) => {
        let _post = doc.data();

        let post = Object.keys(_post).reduce(
          (acc, cur) => {
            if (cur.indexOf('user_') > -1) {
              return {
                ...acc,
                user_info: { ...acc.user_info, [cur]: _post[cur] }
              };
            }
            return { ...acc, [cur]: _post[cur] };
          },
          { id: doc.id, user_info: {} }
        );
        post_list.push(post);
      });
      dispatch(setPost(post_list));
    });
  };
};

const addPostFB = (contents = '') => {
  return function (dispatch, getState, { history }) {
    const postDB = firestore.collection('post');
    const _user = getState().user.user;

    const user_info = {
      user_name: _user.user_name,
      user_id: _user.uid,
      user_profile: _user.user_profile
    };
    const _post = {
      ...initialPost,
      contents: contents,
      insert_dt: moment().format('YYYY-MM-DD hh:mm:ss')
    };
    console.log('읭');
    postDB
      .add({ ...user_info, ..._post })
      .then((doc) => {
        let post = { user_info, ..._post, id: doc.id };
        dispatch(addPost(post));
        history.replace('/');
      })
      .catch((error) => {
        console.log('addPostFB', error);
      });
  };
};
// reducer
export default handleActions(
  {
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.post_list;
      }),
    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        console.log('포스ㅡ추가');
        // draft.list.unshift(action.payload.post);
      })
  },
  initialState
);

console.log(handleActions, 'handle');
// action creator export
const actionCreators = {
  setPost,
  addPost,
  getPostFB,
  addPostFB
};

export { actionCreators };
