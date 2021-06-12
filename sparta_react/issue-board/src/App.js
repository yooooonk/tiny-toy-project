import styled from 'styled-components';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import Main from './page/Main';
import Detail from './page/Detail';
import { history } from './redux/configStore';

function App() {
  return (
    <Container>
      <ConnectedRouter history={history}>
        <Route exact path="/:oranization/:repository" component={Main} />
        <Route
          exact
          path="/:oranization/:repository/issue/:id"
          component={Detail}
        />
      </ConnectedRouter>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export default App;
