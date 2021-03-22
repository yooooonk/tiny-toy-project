import React, { useRef } from 'react';
import tory from './asset/tory.jpg';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { addRank, addUserMessage } from './redux/modules/rank';
const Message = ({ history }) => {
  const dispatch = useDispatch();
  const { correct, name } = useSelector((state) => state.quiz);
  const { user_name } = useSelector((state) => state.rank);

  const input = useRef(null);
  const goRanking = () => {
    const rank_info = {
      score: correct * 20,
      name: user_name,
      message: input.current.value,
      current: true
    };
    dispatch(addRank(rank_info));
    history.push('/ranking');
  };
  return (
    <Container>
      <Img />
      <p>
        <Span>{name}</Span>에게 한 마디
      </p>
      <Bottom>
        <Input ref={input}></Input>
        <Button onClick={goRanking}>메시지 남기고 랭킹보러가기</Button>
      </Bottom>
    </Container>
  );
};

const Container = styled.div`
  width: 80%;
  text-align: center;
  margin-bottom: 20px;
  font-family: 'Yeon Sung', cursive;
  font-size: 4vw;
  height: 50vh;
`;

const Img = styled.div`
  margin: auto;
  background-image: url(${tory});
  background-size: 100%;
  background-repeat: no-repeat;
  width: 200px;
  height: 260px;
  border-radius: 1rem;
`;

const Span = styled.span`
  display: inline-block;
  background-color: rgb(255, 255, 107);
  border-radius: 0.5em;
  width: 30%;
  text-align: center;
`;

const Input = styled.input`
  border-radius: 1em;
  border: none;
  background-color: rgb(230, 230, 230);
  width: 100%;
  height: 30px;

  &::placeholder {
    text-align: center;
  }
`;

const Button = styled.button`
  border: none;
  border-radius: 1em;
  width: 90%;
  height: 30px;
  background-color: pink;
  color: white;
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 80px;
`;
export default Message;
