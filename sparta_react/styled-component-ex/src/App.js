import './App.css';
import styled from 'styled-components';
function App() {
  return (
    <div className="App">
      <MyStyled bgColor={'red'}> Hello react</MyStyled>
    </div>
  );
}

const MyStyled = styled.div`
  width: 50vw;
  min-height: 150px;
  border-radius: 15px;
  color: #fff;
  &:hover {
    background-color: #ddd;
  }
  background-color: ${(props) => props.bgColor};
`;

export default App;
