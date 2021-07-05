import { createReducer, createAction } from '@reduxjs/toolkit';
import { IssueApi } from '../../shared/api';

// initialState
const initialState = {
  issueList: [],
  detail: '',
  page:1,
};

// actions
const setIssueList = createAction('issue/SET_ISSUE_LIST');
const setDetailIssue = createAction('issue/SET_DETAIL_ISSUE');

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
  },
  [setDetailIssue]: (state, { payload }) => {
    console.log('setIssueList', payload);
    state.detail = state.issueList.filter((i) => {
      return i.id === payload;
    });
    /*  state.issueList = [...state.issueList, ...payload];

    state.issueList = state.issueList.reduce((acc, cur) => {
      let idx = acc.findIndex((acc) => acc.id === cur.id);
      if (idx === -1) {
        return [...acc, cur];
      } else {
        acc[idx] = cur;
        return acc;
      }
    }, []); */
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
};

// action creator export
const issueActions = {
  fetchIssues,
  setDetailIssue
};

export { issueActions };
export default issueReducer;
