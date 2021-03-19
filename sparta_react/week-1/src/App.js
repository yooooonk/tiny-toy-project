import React from 'react';
import logo from './logo.svg';
// BucketList 컴포넌트를 import 해옵니다.
// import [컴포넌트 명] from [컴포넌트가 있는 파일경로];
import BucketList from './BucketList';
import './style.css';
import Quiz from './Quiz';

// 클래스형 컴포넌트는 이렇게 생겼습니다!
class App extends React.Component {
  constructor(props) {
    super(props);
    // App 컴포넌트의 state를 정의해줍니다.
    this.state = {
      name: '토리'
    };
  }

  // 랜더 함수 안에 리액트 엘리먼트를 넣어줍니다!
  render() {
    // this 키워드를 통해 state에 접근할 수 있어요.
    console.log(this.state);

    return (
      <div className="App">
        <div className="container">
          {/* <BucketList list={this.state.list} /> */}
          <Quiz name={this.state.name} />
        </div>
      </div>
    );
  }
}

export default App;
