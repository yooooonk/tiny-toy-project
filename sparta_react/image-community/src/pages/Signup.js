import React, { useState } from 'react';
import { Text, Input, Button, Grid } from '../elements';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { actionCreators as userActions } from '../redux/modules/user';

const Signup = (props) => {
  const [id, setId] = useState('');
  const [nickname, setNickname] = useState('');
  const [pw, setPw] = useState('');
  const [pwChk, setChk] = useState('');

  const dispatch = useDispatch();
  const signup = () => {
    console.log(id, pw);
  };
  return (
    <SignupContainer>
      <Text bold="800" size="2em">
        회원가입
      </Text>
      <Grid padding={'0px'}>
        <Input
          title={'아이디'}
          placeholder={'아이디를 입력하세요'}
          setValue={setId}
        />
      </Grid>
      <Grid padding={'0px'}>
        <Input
          title={'닉네임'}
          placeholder={'닉네임을 입력하세요'}
          setValue={setPw}
        />
      </Grid>
      <Grid padding={'0px'}>
        <Input
          title={'비밀번호'}
          placeholder={'비밀번호를 입력하세요'}
          setValue={setPw}
        />
      </Grid>
      <Grid padding={'0px'}>
        <Input
          title={'비밀번호 확인'}
          placeholder={'같은 비밀번호를 입력하세요'}
          setValue={setPw}
        />
      </Grid>
      <Grid padding={'0px'}>
        <Button
          disable={id && pw}
          _onClick={signup}
          type="full"
          bgColor="black"
          color="white"
        >
          회원가입
        </Button>
      </Grid>
    </SignupContainer>
  );
};

const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Signup;
