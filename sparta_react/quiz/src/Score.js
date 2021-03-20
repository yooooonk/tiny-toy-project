import React from 'react';
import styled from 'styled-components';
const Score = (props) => {
  return (
    <ScoreContainer>
      <Text>
        <span>귀염둥이 토리</span> 퀴즈에 대한
        <br /> 내 점수는?
      </Text>
      <MyScore>
        <span>100</span>점
      </MyScore>
      <Button>내 점수보기</Button>
      <Button>랭킹보기</Button>
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
`;

export default Score;
