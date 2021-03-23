import { createReducer, createAction } from '@reduxjs/toolkit';
import { firestore } from '../../firebase';

const db = firestore.collection('schedule');

export const initialState = {
  fullSchedule: []
};

export const fetchFullSchedule = createAction('FETCH_FULL_SCHEDULE');
export const addSchedule = createAction('ADD_SCHEDULE');

const schedule = createReducer(initialState, {
  [fetchFullSchedule]: (state, { payload }) => {
    console.log('fetch', payload);
  },
  [addSchedule]: (state, { payload }) => {
    console.log('add', payload);
    state.fullSchedule.push(payload);
  }
});

// thunk
export const createSchedule = (data) => {
  return (dispatch) => {
    db.add(data).then((docRef) => {
      let schedule = { ...data, completed: false, id: docRef.id };
      dispatch(addSchedule(schedule));
    });
  };
};

export default schedule;
