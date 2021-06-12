import { createReducer, createAction } from '@reduxjs/toolkit';
import { IssueApi } from '../../shared/api';

// initialState
const initialState = {
  issueList: []
};

// actions
const setIssueList = createAction('issue/SET_ISSUE_LIST');

// reducer
const issueReducer = createReducer(initialState, {
  [setIssueList]: (state, { payload }) => {
    console.log('setIssueList', payload);
    state.issueList = [...state.issueList, ...payload];

    state.issueList = state.issueList.reduce((acc, cur) => {
      let idx = acc.findIndex((acc) => acc.id === cur.id);
      if (idx === -1) {
        return [...acc, cur];
      } else {
        acc[idx] = cur;
        return acc;
      }
    }, []);
    /*   

    if (payload.paging) {
      state.paging = payload.paging;
    }

    state.is_loading = false; */
  }
});

const fetchIssues = (page) => async (dispatch, getState) => {
  try {
    const issue = await IssueApi.getIssues(page);
    dispatch(setIssueList(issue.data));
  } catch (error) {
    console.error(error);
    alert('목록을 가져올 수 없습니다');
  }
  /* try {
      let { start, next, size } = getState().post.paging;

      if (start && !next) {
        return;
      }

      dispatch(loading(true));

      const docs = await postAPI.getPosts(next, size);

      let paging = {
        start: docs.docs[0],
        next:
          docs.docs.length === size + 1
            ? docs.docs[docs.docs.length - 1]
            : null,
        size: size
      };

      let post_list = [];

      docs.forEach((doc) => {
        let _post = doc.data();

        // ['commenct_cnt', 'contents', ..]
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

        post_list.push(post);
      });
      post_list.pop();

      dispatch(setPost({ paging, post: post_list }));
    } catch (error) {
      console.error(error);
    } */
};

// action creator export
const issueActions = {
  fetchIssues
};

export { issueActions };
export default issueReducer;
