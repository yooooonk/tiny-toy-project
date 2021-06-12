import styled from 'styled-components';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';

import Main from './page/Main';
import Detail from './page/Detail';

function App() {
  return (
    <Container>
      <Route exact path="/:oranization/:repository" component={Main} />
      <Route
        exact
        path="/:oranization/:repository/issue/:id"
        component={Detail}
      />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export default withRouter(App);
