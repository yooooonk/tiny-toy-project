import React from 'react';
import styled from 'styled-components';
import Calendar from './Calendar';
import { Route, Switch } from 'react-router-dom';
import AddSchedule from './AddSchedule';
import { withRouter } from 'react-router';
const App = ({ history }) => {
  return (
    <div className="App">
      <Title>CALENDAR</Title>

      <Route exact path="/" component={Calendar} />
      <Route exact path="/addSchedule" component={AddSchedule} />
    </div>
  );
};

const Title = styled.div`
  color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5vh;
`;

export default withRouter(App);
