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
- 수정
- 삭제

## 삽질쓰

- npm init으로 해보려했는데 script가 실행이 안되었다...ㅜ CRA가 뭔지 공부는 하게 되었지만..아쉽..왜 안됐지.
- App에서 월? 컴포넌트를 분리했는데 moment를 App에서 관리하고 있다..리덕스로 빼는게 좋을까? 월은?..고민하다가 날짜는 app에서 한번에 관리하는게 좋을 것 같아서 날짜관련은 우선 app엣 state로 관리하기로.
- redux toolkit 적용!
- 캘린더 일정을 뿌리는 것 : 월을 바꿀 때 , 해당월에 해당하는 일정만 필터

---

**&#128209; reference**

- [쉽게 배우는 React로 달력 만들기](https://www.yeolceo.com/69)
- [리액트 컴포넌트 만들기 - 캘린더](https://velog.io/@zynkn/%EB%A6%AC%EC%95%A1%ED%8A%B8-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0-%EC%BA%98%EB%A6%B0%EB%8D%94#5-redux-%EC%8A%A4%ED%86%A0%EC%96%B4-%EB%A7%8C%EB%93%A4%EA%B8%B0)
- [npm init으로 프로젝트 생성하기](http://www.devkuma.com/books/pages/1054)
- [react로 만든 프로젝트 톺아보기](https://jeonghwan-kim.github.io/2018/07/16/react-app-overview.html)
- [CRA없이 리액트 프로젝트 시작하기](https://medium.com/@_diana_lee/cra%EC%97%86%EC%9D%B4-%EB%A6%AC%EC%95%A1%ED%8A%B8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-feat-%EC%9B%B9%ED%8C%A9-%EB%B0%94%EB%B2%A8-74f5bc3c5da1)
