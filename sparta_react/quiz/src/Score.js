import React from 'react';
import styled from 'styled-components';
const Score = (props) => {
  return (
    <ScoreContainer>
      <Text>귀염둥이 토리에 대한 내 점수는?</Text>
      <div>
        <span>100</span>점
      </div>
      <button>내 점수보기</button>
      <button>랭킹보기</button>
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

const Text = styled.h1``;

const MyScore = styled.div``;

const Button = styled.button``;

export default Score;
