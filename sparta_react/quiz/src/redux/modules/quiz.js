const START = 'quiz/START';
const CREATE = 'quiz/CREATE';

const initailState = {
  name: null,
  message: []
};
// Action Creators
export const startQuiz = (name) => {
  return { type: START, name };
};

export const loadBucket = (bucket) => {
  return { type: CREATE, bucket };
};
// Reducer
export default function reducer(state = initailState, action = {}) {
  switch (action.type) {
    case 'quiz/START': {
      console.log(action.name);
      const userName = action.name;
      return { name: userName };
    }

    default:
      return state;
  }
}
