import './App.css';
import styled, { keyframes } from 'styled-components';
function App() {
  return (
    <div className="App">
      <Box></Box>
    </div>
  );
}

const move = keyframes`
  0% {
    top : 20px;
    opacity:1;
  }

  30%{
    top:50px
  }
  50%{
    top : 200px;
    opacity:0
  }

  100%{
    top:20px;
    opacity:1;
  }
`;

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: skyblue;
  border-radius: 50%;
  position: absolute;
  top: 20px;
  left: 20px;
  animation: ${move} 2s 1s infinite;
`;

export default App;
