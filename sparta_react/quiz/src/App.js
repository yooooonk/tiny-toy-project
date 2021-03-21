import React from 'react';
import Main from './Main';
import styled from 'styled-components';
import Quiz from './Quiz';
import Score from './Score';
import Ranking from './Ranking';
import Message from './Message';
import { withRouter } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';
// 클래스형 컴포넌트는 이렇게 생겼습니다!
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '토리',
      page: 'ranking',
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
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <Main history={this.props.history} name={this.state.name} />
              )}
            />
            <Route
              path="/quiz"
              exact
              render={() => (
                <Quiz history={this.props.history} list={this.state.list} />
              )}
            />
            <Route
              path="/score"
              exact
              render={() => (
                <Score
                  name={this.state.name}
                  history={this.props.history}
                  comment={this.state.comment}
                />
              )}
            />
            <Route
              path="/ranking"
              history={this.props.history}
              component={Ranking}
            />
            <Route
              path="/message"
              history={this.props.history}
              component={Message}
            />
            <Route
              render={(props) => <NotFound history={this.props.history} />}
            />
          </Switch>
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

export default withRouter(App);
