import React from 'react';
import styled from 'styled-components';
import Calendar from './Calendar';

const App = () => {
  return (
    <div className="App">
      <Title>CALENDAR</Title>
      <Calendar />

      <footer>등록/수정</footer>
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
export default App;
