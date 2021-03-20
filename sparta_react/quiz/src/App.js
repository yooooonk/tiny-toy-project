import React from 'react';
import './style.css';
import Main from './Main';
import styled from 'styled-components';
import Quiz from './Quiz';
import Score from './Score';

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
        <Container>
          {/* <Main name={this.state.name} /> */}
          {/* <Quiz /> */}
          {<Score />}
        </Container>
      </div>
    );
  }
}

const Container = styled.div`
  max-width: 350px;
  min-height: 80vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default App;
