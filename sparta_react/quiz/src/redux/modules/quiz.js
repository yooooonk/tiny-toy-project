const START = 'quiz/START';
const REGIST_MESSAGE = 'quiz/REGIST_MESSAGE';

const initailState = {
  userName: null,
  message: []
};
// Action Creators
export const startQuiz = (name) => {
  return { type: START, name };
};

export const registMessage = (message) => {
  return { type: REGIST_MESSAGE, message };
};
// Reducer
export default function reducer(state = initailState, action = {}) {
  switch (action.type) {
    case 'quiz/START': {
      const userName = action.name;
      return { ...state, userName: userName };
    }

    case 'quiz/REGIST_MESSAGE': {
      const newMessage = [
        ...state.message,
        {
          userName: state.userName,
          msg: action.message
        }
      ];

      return { ...state, message: newMessage };
    }

    default:
      return state;
  }
}
