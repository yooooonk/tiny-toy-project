import { firestore } from '../../firebase';

const bucketDb = firestore.collection('bucket');
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

// thunk

export const loadBucketFB = () => {
  return function (dispatch) {
    bucketDb.get().then((docs) => {
      let data = [];
      docs.forEach((doc) => {
        if (doc.exists) {
          data = [...data, { id: doc.id, ...doc.data() }];
        }
      });

      dispatch(loadBucket(data));
    });
  };
};

export const addBucketFB = (bucket) => {
  return function (dispatch) {
    let bucketData = { text: bucket, completed: false };

    bucketDb.add(bucketData).then((docRef) => {
      bucketData = { ...bucketData, id: docRef.id };
      dispatch(createBucket(bucketData));
    });
  };
};

export const updateBucketFB = (idx) => {
  return function (dispatch, getState) {
    const _prev = getState().bucket.list[idx];
    let newData = { ..._prev, completed: true };
    if (!newData.id) {
      return;
    }
    bucketDb
      .doc(newData.id)
      .update(newData)
      .then(() => {
        dispatch(updateBucket(idx));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deleteBucketFB = (idx) => {
  return function (dispatch, getState) {
    const bucketData = getState().bucket.list[idx];

    if (!bucketData.id) {
      return;
    }

    bucketDb
      .doc(bucketData.id)
      .delete()
      .then(() => {
        dispatch(deleteBucket(idx));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'bucket/LOAD': {
      console.log(action.bucket);
      if (action.bucket.length > 0) {
        return { list: action.bucket };
      }
      return state;
    }

    case 'bucket/CREATE': {
      const new_bucket_list = [...state.list, action.bucket];
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
