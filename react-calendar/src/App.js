import React from 'react';
import styled from 'styled-components';
import Calendar from './Calendar';
import { Route, Switch } from 'react-router-dom';
import AddSchedule from './AddSchedule';
import { withRouter } from 'react-router';
import EditSchedule from './EditSchedule';
import { useSelector } from 'react-redux';
const App = ({ history }) => {
  const { isOpenEditPopup } = useSelector((state) => state.schedule);
  return (
    <div className="App">
      <Title>CALENDAR</Title>
      <Switch>
        {isOpenEditPopup && <EditSchedule />}
        <Route exact path="/" component={Calendar} />
        <Route exact path="/addSchedule" component={AddSchedule} />
      </Switch>
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
