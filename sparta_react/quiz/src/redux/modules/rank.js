// 유저 이름을 바꾼다
const ADD_USER_NAME = 'rank/ADD_USER_NAME';
// 유저 메시지를 바꾼다
const ADD_USER_MESSAGE = 'rank/ADD_USER_MESSAGE';
// 랭킹정보를 추가한다
const ADD_RANK = 'rank/ADD_RANK';
// 랭킹정보를 가져온다
const GET_RANK = 'rank/GET_RANK';
const RESET_USER_INFO = 'rank/RESET_USER_INFO';
const initialState = {
  user_name: '',
  user_message: '',
  user_score: 0,
  score_text: {
    0: '토리의 귀여움을...모르시는지..?',
    20: '이제 토리를 알아가는 단계',
    40: '토리의 귀여움을 아직 조금 밖에 모르시는군요',
    60: '토리 졸귀탱 ㅇㅈ?',
    80: '토리의 귀여움을 아는군요!',
    100: '당신은 진정한 토리 악개!'
  },
  ranking: [
    { score: 40, name: '임민영', message: '안녕 르탄아!' },
    { score: 40, name: '임민영', message: '안녕 르탄아!' },
    { score: 40, name: '임민영', message: '안녕 르탄아!' },
    { score: 40, name: '임민영', message: '안녕 르탄아!' },
    { score: 40, name: '임민영', message: '안녕 르탄아!' },
    { score: 40, name: '임민영', message: '안녕 르탄아!' },
    { score: 40, name: '임민영', message: '안녕 르탄아!' },
    { score: 40, name: '임민영', message: '안녕 르탄아!' },
    { score: 40, name: '임민영', message: '안녕 르탄아!' },
    { score: 40, name: '임민영', message: '안녕 르탄아!' },
    { score: 40, name: '임민영', message: '안녕 르탄아!' }
  ]
};

// Action Creators
export const addUserName = (user_name) => {
  return { type: ADD_USER_NAME, user_name };
};

export const addUserMessage = (user_message) => {
  return { type: ADD_USER_MESSAGE, user_message };
};

export const addRank = (rank_info) => {
  return { type: ADD_RANK, rank_info };
};

export const getRank = (rank_list) => {
  return { type: GET_RANK, rank_list };
};

export const resetUserInfo = () => {
  return { type: RESET_USER_INFO };
};
// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case 'rank/ADD_USER_NAME': {
      return { ...state, user_name: action.user_name };
    }

    case 'rank/ADD_USER_MESSAGE': {
      return { ...state, user_message: action.user_message };
    }

    case 'rank/ADD_RANK': {
      return { ...state, ranking: [...state.ranking, action.rank_info] };
    }

    case 'rank/GET_RANK': {
      return { ...state, ranking: action.rank_list };
    }
    case 'rank/RESET_USER_INFO': {
      const resetList = action.rank_info.map((rank, idx) => {
        if (rank.current) {
          return { ...rank, current: false };
        } else {
          return rank;
        }
      });
      return { ...state, ranking: resetList, user_name: null };
    }
    default:
      return state;
  }
}
