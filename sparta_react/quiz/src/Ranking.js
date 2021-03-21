import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Ranking = ({ history }) => {
  const message = useSelector((state) => state.quiz.message);
  const restart = () => {
    history.push('/');
  };
  return (
    <Container>
      <Header>
        <span>3명</span>의 사람들중 당신은?
      </Header>
      <CardContainer>
        {message.map((m, idx) => {
          return (
            <Card key={idx}>
              <Rank>{idx + 1}등</Rank>
              <Content>
                {m.userName} <br /> {m.msg}
              </Content>
            </Card>
          );
        })}
      </CardContainer>
      <Button onClick={restart}>다시하기</Button>
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
