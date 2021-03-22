import React, { useState } from 'react';
import SwipeItem from './SwipeItem';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Progress from './Progress';

const Quiz = ({ history }) => {
  const [num, setNum] = useState(0);
  const list = useSelector((state) => state.quiz.quizList);

  const onSwipe = (direction) => {
    if (num + 1 === list.length) {
      history.push('/score');
      return;
    }
    setNum(num + 1);
  };
  return (
    <QuizContainer>
      <Progress num={num} />
      <p>
        <span>{num + 1}번 문제</span>
      </p>
      <Question>{list[num].question}</Question>
      <AnswerZone>
        <Answer>O</Answer>
        <Answer>X</Answer>
      </AnswerZone>
      {list.map((q, idx) => {
        if (idx === num) {
          return <SwipeItem key={idx} onSwipe={onSwipe} />;
        }
      })}
    </QuizContainer>
  );
};

const QuizContainer = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: center;
  height: 80vh;
  width: 100vw;

  & > p {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px 0;
  }
  & > p > span {
    padding: 8px 16px;
    background-color: pink;
    border-radius: 30px;
    color: gray;
  }
`;

const Question = styled.h1`
  font-size: 1.5em;
`;

const AnswerZone = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

const Answer = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 8em;
  color: gray;
  font-weight: 600;
`;

export default Quiz;
