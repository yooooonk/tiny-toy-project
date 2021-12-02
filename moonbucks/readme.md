https://www.udemy.com/course/vanilla-js-lv1/

# 시작하기 전에

## 이거 왜해?

- 상태 관리의 원리를 알고 싶어서
- 바닐라 자바스크립트에 대해 더 이해하고 싶어서
- 강의력이 좋다고해서

## 결과물은?

- 프로젝트와 깃헙 잔디
- 자바스크립트에 대한 이해

## 어떻게 할까?

- 하루에 30분에서 1시간 정도 강의를 듣고, 2주 안에 완강한다
- 강의 내용을 블로그에 정리한다

# 요구사항 정리

### 메뉴판 만들기

- 추가
  [v] 확인 버튼을 누르면 메뉴가 추가된다
  [v] 엔터를 누르면 메뉴가 추가된다
  [v] 메뉴가 추가되고 input이 초기화된다
  [v] count가 증가한다
  [v] 빈 값은 추가되지 않는다
- 수정
  [v] prompt가 뜬다
  [v] 확인버튼을 누르면 수정한 내용이 목록에 반영된다
- 삭제
  [v] 삭제를 묻는 confirm이 뜬다
  [v] 확인을 누르면 메뉴가 삭제된다
  [v] count가 감소한다

# 새로 알게 된 것

- method : closest,insertAdjacentHTML
- 이렇게 쓸 수 있음

```javascript
const $ = (selector) => document.querySelector(selector);
```
