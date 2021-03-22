const START = 'quiz/START';
const REGIST_MESSAGE = 'quiz/REGIST_MESSAGE';

const initailState = {
  userName: null,
  message: [],
  quizList: [
    { question: '토리는 남자다', answer: true },
    { question: '토리는 순둥이다', answer: true },
    { question: '토리는 고라니 뼈를 좋아한다', answer: true },
    { question: '토리는 고양이를 좋아한다', answer: false },
    { question: '토리는 모태솔로다', answer: false },
    { question: '토리는 진도+풍산이다', answer: true }
  ],
  name: '토리',
  comment: '당신은 진정한 토리악개!'
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
