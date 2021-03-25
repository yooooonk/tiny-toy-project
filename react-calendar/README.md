# React로 만든 calendar

## Info

- 개발기간 : 3월 22일~3월 25일
- stack : react(CRA), redux, firebase
- desing reference : https://dribbble.com/shots/3622125-Calendar-UI

## 개발 순서

[] 기본 달력 구현

- 월 출력, 월 이동 v
- 날짜 출력 v
- Month 컴포넌트 디자인
- Calendar 컴포넌트 디자인
- Todo 컴포넌트 생성 및 디자인 v
- today

[] 스케줄러 기능

- firebase 연결 v
- 등록 v
- 스케줄 조회 v
- 수정 v
- 삭제 v

## 삽질쓰

- npm init으로 해보려했는데 script가 실행이 안되었다...ㅜ CRA가 뭔지 공부는 하게 되었지만..아쉽..왜 안됐지.
- App에서 월? 컴포넌트를 분리했는데 moment를 App에서 관리하고 있다..리덕스로 빼는게 좋을까? 월은?..고민하다가 날짜는 app에서 한번에 관리하는게 좋을 것 같아서 날짜관련은 우선 app엣 state로 관리하기로.
- redux toolkit 적용!
- 데이터처리는 어떻게 했나요?
  - 캘린더 일정을 뿌리는 것 : 월을 바꿀 때 , 해당월에 해당하는 일정만 필터

```javascript
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


[fetchFullSchedule]: (state, { payload }) => {
    state.fullSchedule = payload.fullList;
    state.thisMonth = payload.thisMonth;
  }
```

```javascript
// 변경후
[fetchFullSchedule]: (state, { payload }) => {
    state.fullSchedule = payload.fullList;
    state.thisMonthSchedule = payload.thisMonthSchedule;
    //fetch할때부터filter상태로
    if (state.isFilter) {
      state.thisMonth = state.thisMonthSchedule.filter((sc) => {
        return sc.completed === true;
      });
    } else {
      state.thisMonth = state.thisMonthSchedule;
    }
  }

```

- Calendar.js에 useEfect(readSchedule), 월이동할 때 filterTHisMonth()

```javascript
const movePrevMonth = () => {
  setCurrent(current.clone().subtract(1, 'month'));
  const startDay = current
    .clone()
    .subtract(1, 'months')
    .startOf('month')
    .format('YYYYMMDD');
  const endDay = current
    .clone()
    .subtract(1, 'months')
    .endOf('month')
    .format('YYYYMMDD');

  dispatch(filterThisMonth({ startDay, endDay }));
};

const moveNextMonth = () => {
  setCurrent(current.clone().add(1, 'month'));

  const startDay = current
    .clone()
    .add(1, 'months')
    .startOf('month')
    .format('YYYYMMDD');
  const endDay = current
    .clone()
    .add(1, 'months')
    .endOf('month')
    .format('YYYYMMDD');

  dispatch(filterThisMonth({ startDay, endDay }));
};
```

- 그래서 filterThisMonth를해도 리렌더링이 되어 fetch_full_schedule을 도 호출함
- thisMonth()가 없어도 충분히 돌아가서 수정했음!

```javascript
const { thisMonth, isOpenEditPopup, isFilter } = useSelector(
  (state) => state.schedule
);
const [current, setCurrent] = useState(moment());
const dispatch = useDispatch();
useEffect(() => {
  const startDay = current.clone().startOf('month').format('YYYYMMDD');
  const endDay = current.clone().endOf('month').format('YYYYMMDD');
  dispatch(readSchedule({ startDay, endDay }));
}, [current, dispatch, isOpenEditPopup, isFilter]);

const movePrevMonth = () => {
  setCurrent(current.clone().subtract(1, 'month'));
};

const moveNextMonth = () => {
  setCurrent(current.clone().add(1, 'month'));
};
```

- 하나의 함수는 하나의 기능만!
- redux-toolkit을 이용해보았다
- thunk는 액션함수를 반환한다!!!!액션을 따로 만들어줄 필요가없다

---

**&#128209; reference**

- [쉽게 배우는 React로 달력 만들기](https://www.yeolceo.com/69)
- [리액트 컴포넌트 만들기 - 캘린더](https://velog.io/@zynkn/%EB%A6%AC%EC%95%A1%ED%8A%B8-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0-%EC%BA%98%EB%A6%B0%EB%8D%94#5-redux-%EC%8A%A4%ED%86%A0%EC%96%B4-%EB%A7%8C%EB%93%A4%EA%B8%B0)
- [npm init으로 프로젝트 생성하기](http://www.devkuma.com/books/pages/1054)
- [react로 만든 프로젝트 톺아보기](https://jeonghwan-kim.github.io/2018/07/16/react-app-overview.html)
- [CRA없이 리액트 프로젝트 시작하기](https://medium.com/@_diana_lee/cra%EC%97%86%EC%9D%B4-%EB%A6%AC%EC%95%A1%ED%8A%B8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-feat-%EC%9B%B9%ED%8C%A9-%EB%B0%94%EB%B2%A8-74f5bc3c5da1)
