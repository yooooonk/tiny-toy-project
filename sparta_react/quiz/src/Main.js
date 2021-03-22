import React, { useRef } from 'react';
import logo from './logo.svg';
import './style.css';
import styled from 'styled-components';
import tory from './asset/tory.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { startQuiz } from './redux/modules/quiz';
const Main = ({ history }) => {
  const { name } = useSelector((state) => state.quiz);

  console.log(name, 'state');
  const input = useRef(null);
  const dispatch = useDispatch();
  const onStart = () => {
    dispatch(startQuiz(input.current.value));
    history.push('/quiz');
  };
  return (
    <Start>
      나는 <Span>{name}</Span>에 대해서 <br /> 얼마나 알고 있을까?
      <Img></Img>
      <Bottom>
        <Input placeholder={'내 이름'} ref={input}></Input>
        <Button onClick={onStart}>시작하기</Button>
      </Bottom>
    </Start>
  );
};

const Start = styled.div`
  width: 80%;
  text-align: center;
  margin-bottom: 20px;
  font-family: 'Yeon Sung', cursive;
  font-size: 4vw;
  height: 50vh;
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 80px;
`;
const Input = styled.input`
  border-radius: 1em;
  border: none;
  background-color: rgb(230, 230, 230);
  width: 60%;
  height: 30px;

  &::placeholder {
    text-align: center;
  }
`;

const Button = styled.button`
  border: none;
  border-radius: 1em;
  width: 30%;
  height: 30px;
  background-color: pink;
  color: white;
`;

const Span = styled.span`
  display: inline-block;
  background-color: rgb(255, 255, 107);
  border-radius: 0.5em;
  width: 30%;
  text-align: center;
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
export default Main;
