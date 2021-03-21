// Actions
const LOAD = 'bucket/LOAD';
const CREATE = 'bucket/CREATE';
const DELETE = 'bucket/DELETE';
const UPDATE = 'bucket/UPDATE';

const initialState = {
  list: [
    { text: '해외에서 일하기', completed: false },
    { text: '미라클모닝이 디폴트', completed: false },
    { text: '영화관 가기', completed: false }
  ]
};
// Action Creators
export const loadBucket = (bucket) => {
  return { type: LOAD, bucket };
};

export const createBucket = (bucket) => {
  return { type: CREATE, bucket };
};

export const deleteBucket = (bucketIdx) => {
  return { type: DELETE, bucketIdx };
};

export const updateBucket = (bucketIdx) => {
  return { type: UPDATE, bucketIdx };
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'bucket/LOAD': {
      return state;
    }

    case 'bucket/CREATE': {
      const new_bucket_list = [
        ...state.list,
        { text: action.bucket, completed: false }
      ];
      return { list: new_bucket_list };
    }

    case 'bucket/DELETE': {
      const bucketIdx = action.bucketIdx;
      const new_bucket_list = state.list.filter((item, idx) => {
        return idx !== bucketIdx;
      });
      return { list: new_bucket_list };
    }

    case 'bucket/UPDATE': {
      const bucket_list = state.list.map((bucket, idx) => {
        if (idx === action.bucketIdx) {
          return { ...bucket, completed: true };
        } else {
          return bucket;
        }
      });
      return { list: bucket_list };
    }
    default:
      return state;
  }
}
