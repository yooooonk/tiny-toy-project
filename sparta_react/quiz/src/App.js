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
              render={() => <Main history={this.props.history} />}
            />
            <Route
              path="/quiz"
              exact
              render={() => <Quiz history={this.props.history} />}
            />
            <Route
              path="/score"
              exact
              render={() => <Score history={this.props.history} />}
            />
            <Route
              path="/ranking"
              exact
              render={() => <Ranking history={this.props.history} />}
            />
            <Route
              path="/message"
              exact
              render={() => <Message history={this.props.history} />}
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
