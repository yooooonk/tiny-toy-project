import React from 'react';
import './style.css';
import Quiz from './Quiz';

// 클래스형 컴포넌트는 이렇게 생겼습니다!
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '토리'
    };
  }

  // 랜더 함수 안에 리액트 엘리먼트를 넣어줍니다!
  render() {
    return (
      <div className="App">
        <div className="container">
          <Quiz name={this.state.name} />
        </div>
      </div>
    );
  }
}

export default App;
