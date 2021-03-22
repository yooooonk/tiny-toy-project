const REGIST_MESSAGE = 'quiz/REGIST_MESSAGE';
const COUNT_CORRECT = 'quiz/COUNT_CORRECT';
const RESET_CORRECT = 'quiz/RESET_CORRECT';
const initailState = {
  correct: 0,
  quizList: [
    { question: '토리는 남자다', answer: true },
    { question: '토리는 순둥이다', answer: true },
    { question: '토리는 고양이를 좋아한다', answer: false },
    { question: '토리는 모태솔로다', answer: false },
    { question: '토리는 진도+풍산이다', answer: true }
  ],
  name: '토리',
  comment: '당신은 진정한 토리악개!'
};
// Action Creators

export const countCorrect = () => {
  return { type: COUNT_CORRECT };
};

export const resetCorrect = () => {
  return { type: RESET_CORRECT };
};
// Reducer
export default function reducer(state = initailState, action = {}) {
  switch (action.type) {
    case 'quiz/COUNT_CORRECT': {
      return { ...state, correct: state.correct + 1 };
    }

    case 'quiz/RESET_CORRECT': {
      return { ...state, correct: 0 };
    }

    default:
      return state;
  }
}
