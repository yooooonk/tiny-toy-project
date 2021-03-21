const START = 'quiz/START';
const CREATE = 'bucket/CREATE';

const initailState = {
  name: null,
  message: {}
};
// Action Creators
export const loadBucket = (bucket) => {
  return { type: LOAD, bucket };
};

export const loadBucket = (bucket) => {
  return { type: CREATE, bucket };
};
// Reducer
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case 'bucket/LOAD': {
      return state;
    }

    case 'bucket/CREATE': {
      const new_bucket_list = [...state.list, action.bucket];
      return { list: new_bucket_list };
    }
    default:
      return state;
  }
}
