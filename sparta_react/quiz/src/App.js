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
      name: '토리',
      page: 'quiz',
      list: [
        { question: '토리는 남자다', answer: true },
        { question: '토리는 순둥이다', answer: true },
        { question: '토리는 고라니 뼈를 좋아한다', answer: true },
        { question: '토리는 고양이를 좋아한다', answer: false },
        { question: '토리는 모태솔로다', answer: false },
        { question: '토리는 진도+풍산이다', answer: true }
      ],
      comment: '당신은 진정한 토리악개!'
    };
  }

  // 랜더 함수 안에 리액트 엘리먼트를 넣어줍니다!
  render() {
    return (
      <div className="App">
        <Container>
          {this.state.page === 'start' && <Main name={this.state.name} />}
          {this.state.page === 'quiz' && <Quiz list={this.state.list} />}
          {this.state.page === 'score' && (
            <Score name={this.state.name} comment={this.state.comment} />
          )}
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
