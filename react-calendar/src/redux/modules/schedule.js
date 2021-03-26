import { createReducer, createAction } from '@reduxjs/toolkit';
import { firestore } from '../../firebase';

const db = firestore.collection('schedule');

export const initialState = {
  fullSchedule: [],
  thisMonthSchedule: [],
  thisMonth: [],
  isOpenEditPopup: false,
  currentSchedule: null,
  isFilter: false
};

export const fetchFullSchedule = createAction('FETCH_FULL_SCHEDULE');
export const addSchedule = createAction('ADD_SCHEDULE');
export const editSchedule = createAction('EDIT_SCHEDULE');
export const removeSchedule = createAction('REMOVE_SCHEDULE');
export const filterThisMonth = createAction('FILTER_THIS_MONTH');
export const openEditPopup = createAction('OPEN_EDIT_POPUP');
export const setCurrentSchedule = createAction('SET_CURRENT_SCHEDULE');
export const setIsFilter = createAction('SET_IS_FILITER');

const schedule = createReducer(initialState, {
  [fetchFullSchedule]: (state, { payload }) => {
    state.fullSchedule = payload.fullList;
    state.thisMonthSchedule = payload.thisMonthSchedule;

    if (state.isFilter) {
      state.thisMonth = state.thisMonthSchedule.filter((sc) => {
        return sc.completed === true;
      });
    } else {
      console.log('gg');
      state.thisMonth = state.thisMonthSchedule;
    }
  },
  [openEditPopup]: (state, { payload }) => {
    state.isOpenEditPopup = payload.isOpen;
    state.currentSchedule = payload.schedule;
  },
  [addSchedule]: (state, { payload }) => {
    state.fullSchedule.push(payload);
  },
  [setIsFilter]: (state, { payload }) => {
    state.isFilter = payload;
  },
  [addSchedule]: (state, { payload }) => {
    state.fullSchedule.push(payload);
  },
  [editSchedule]: (state, { payload }) => {
    const fullIdx = state.fullSchedule.findIndex((s) => s.id === payload.id);
    state.fullSchedule.splice(fullIdx, 1, payload);

    const monthIdx = state.thisMonth.findIndex((s) => s.id === payload.id);
    state.fullSchedule.splice(monthIdx, 1, payload);

    state.currentSchedule = payload;
  },
  [removeSchedule]: (state, { payload }) => {
    const fullIdx = state.fullSchedule.findIndex((s) => s.id === payload.id);
    state.fullSchedule.splice(fullIdx, 1);

    const monthIdx = state.thisMonth.findIndex((s) => s.id === payload.id);
    state.fullSchedule.splice(monthIdx, 1);

    state.currentSchedule = null;
  },

  [filterThisMonth]: (state, { payload }) => {
    state.thisMonth = state.fullSchedule.filter((sc, idx) => {
      if (state.isFilter) {
        return (
          parseInt(sc.date) >= parseInt(payload.startDay) &&
          parseInt(sc.date) <= parseInt(payload.endDay) &&
          sc.completed === true
        );
      } else {
        return (
          parseInt(sc.date) >= parseInt(payload.startDay) &&
          parseInt(sc.date) <= parseInt(payload.endDay)
        );
      }
    });
  }
});

// thunk
export const createSchedule = (data) => {
  return (dispatch) => {
    const saveData = { ...data, completed: false };
    db.add(saveData).then((docRef) => {
      let schedule = { ...saveData, id: docRef.id };
      dispatch(addSchedule(schedule));
    });
  };
};

export const readSchedule = ({ startDay, endDay }) => {
  return (dispatch) => {
    db.get().then((docs) => {
      let fullList = [];
      docs.forEach((doc) => {
        if (doc.exists) {
          let schedule = { ...doc.data(), id: doc.id };
          fullList.push(schedule);
        }
      });

      const thisMonthSchedule = fullList.filter((sc, idx) => {
        return (
          parseInt(sc.date) >= parseInt(startDay) &&
          parseInt(sc.date) <= parseInt(endDay)
        );
      });

      dispatch(fetchFullSchedule({ fullList, thisMonthSchedule }));
    });
  };
};

export const updateSchedule = (data) => {
  return (dispatch) => {
    db.doc(data.id)
      .update(data)
      .then((docRef) => {
        dispatch(editSchedule(data));
      });
  };
};

export const deleteSchedule = (id) => {
  return (dispatch) => {
    db.doc(id)
      .delete()
      .then(() => {
        dispatch(removeSchedule(id));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export default schedule;
