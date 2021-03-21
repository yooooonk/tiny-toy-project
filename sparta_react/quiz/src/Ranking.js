import React from 'react';
import styled from 'styled-components';

const Ranking = () => {
  return (
    <Container>
      <Header>
        <span>7명</span>의 사람들중 당신은?
      </Header>
      <CardContainer>
        <Card>
          <Rank>1등</Rank>
          <Content>
            조윤경 <br /> 토리 귀여워 제일좋아{' '}
          </Content>
        </Card>
      </CardContainer>
      <Button>다시하기</Button>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 4vw;
`;

const Header = styled.div`
  border-bottom: dashed 3px black;
  padding: 10px;
  & > span {
    display: inline-block;
    background-color: rgb(255, 255, 107);
    border-radius: 0.5em;
    width: 15%;
    text-align: center;
  }
`;

const CardContainer = styled.div`
  padding: 10px;
`;

const Card = styled.div`
  border: 2px solid gray;
  display: flex;
  align-items: center;
  border-radius: 10px;
  height: 80px;
`;

const Rank = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px gray solid;
  height: 60%;
`;

const Content = styled.div`
  text-align: left;
  margin-left: 15px;
  font-size: 1rem;
`;

const Button = styled.div`
  border: none;
  background-color: skyblue;
  color: white;
  border-radius: 20px;
  position: fixed;
  top: 85vh;
  width: 70vw;
  padding: 4px;
`;
export default Ranking;
