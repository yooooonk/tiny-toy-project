import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
const Score = ({ history }) => {
  const { name, correct } = useSelector((state) => state.quiz);
  const { score_text } = useSelector((state) => state.rank);

  const restartQuiz = () => {
    history.push('/');
  };

  const goMessage = () => {
    history.push('/message');
  };
  return (
    <ScoreContainer>
      <Text>
        <span>귀염둥이 {name}</span> 퀴즈에 대한
        <br /> 내 점수는?
      </Text>
      <MyScore>
        <span>{correct * 20}</span>점
      </MyScore>
      <Comment>{score_text[correct * 20]}</Comment>

      <Button onClick={restartQuiz}>다시하기</Button>
      <Button onClick={goMessage}>메시지 남기기</Button>
    </ScoreContainer>
  );
};

const ScoreContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 70vh;
  overflow: hidden;
  padding: 16px;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Text = styled.h1`
  font-size: 1.3em;
  margin: 0px;
  text-align: center;
  & span {
    background-color: #fef5d4;
  }
`;

const MyScore = styled.div`
  font-size: 2em;
  margin: 20px;
  font-weight: 700;

  & span {
    background: #fef5d4;
    border-radius: 30px;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 8px;
  border-radius: 30px;
  border: none;
  margin: 5px;
  background-color: pink;
`;

const Comment = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
`;
export default Score;
