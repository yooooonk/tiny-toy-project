import { createReducer, createAction } from '@reduxjs/toolkit';
import { firestore } from '../../firebase';

const db = firestore.collection('schedule');

export const initialState = {
  fullSchedule: [],
  thisMonth: []
};

export const fetchFullSchedule = createAction('FETCH_FULL_SCHEDULE');
export const addSchedule = createAction('ADD_SCHEDULE');
export const filterThisMonth = createAction('FILTER_THIS_MONTH');

const schedule = createReducer(initialState, {
  [fetchFullSchedule]: (state, { payload }) => {
    state.fullSchedule = payload.fullList;
    state.thisMonth = payload.thisMonth;
    console.log(payload.thisMonth);
  },
  [addSchedule]: (state, { payload }) => {
    state.fullSchedule.push(payload);
  },
  [filterThisMonth]: (state, { payload }) => {
    state.thisMonth = state.fullSchedule.filter((sc, idx) => {
      return (
        parseInt(sc.date) >= parseInt(payload.startDay) &&
        parseInt(sc.date) <= parseInt(payload.endDay)
      );
    });
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

export const readSchedule = ({ startDay, endDay }) => {
  return (dispatch) => {
    db.get().then((docs) => {
      let fullList = [];
      docs.forEach((doc) => {
        let schedule = { ...doc.data(), id: doc.id };
        fullList.push(schedule);
      });

      const thisMonth = fullList.filter((sc, idx) => {
        return (
          parseInt(sc.date) >= parseInt(startDay) &&
          parseInt(sc.date) <= parseInt(endDay)
        );
      });

      dispatch(fetchFullSchedule({ fullList, thisMonth }));
    });
  };
};

export default schedule;
