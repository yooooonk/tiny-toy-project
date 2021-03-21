import React from 'react';
import styled from 'styled-components';
import tory from './asset/tory1.jpg';

const Quiz = () => {
  return (
    <QuizContainer>
      <p>
        <span>1번문제</span>
      </p>
      <Question>문제입니다!</Question>
      <AnswerZone>
        <Answer>O</Answer>
        <Answer>X</Answer>
      </AnswerZone>
      <DragItem>
        <Img />
      </DragItem>
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

const DragItem = styled.div`
  position: fixed;
  top: 42vh;
  left: 33vw;
  width: 35vw;
  height: 35vw;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  cursor: pointer;
`;

const Img = styled.div`
  background-image: url(${tory});
  background-size: 100%;
  background-position-y: center;
  border-radius: 50%;
  width: 35vw;
  height: 35vw;
`;
export default Quiz;
