import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
const Progress = ({ num }) => {
  const quizList = useSelector((state) => state.quiz.quizList);
  /*   let count = 0;

  quizList.map((b, idx) => {
    if (b.completed) {
      count++;
    }
  }); */
  return (
    <Background>
      <Bar width={(num / quizList.length) * 100 + '%'} />
      <Dot />
    </Background>
  );
};

const Background = styled.div`
  background: #eee;
  width: 100%;
  height: 20px;
  display: flex;
  align-items: center;
  border-radius: 10px;
`;

const Bar = styled.div`
  background-color: orange;
  height: 20px;
  width: ${(props) => props.width};
  transition: width 1s;
  border-radius: 10px;
`;

const Dot = styled.div`
  background: white;
  border: 5px solid orange;
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: -10px;
`;

export default Progress;
