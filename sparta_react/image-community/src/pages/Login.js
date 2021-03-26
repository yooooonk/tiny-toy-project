import React, { useState } from 'react';
import { Text, Input, Button, Grid } from '../elements';
import styled from 'styled-components';
import { actionCreators as userActoins } from '../redux/modules/user';
import { useDispatch } from 'react-redux';

const Form = (props) => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const dispatch = useDispatch();

  const onLogin = () => {
    dispatch(userActoins.loginAction({ user_name: 'tori' }));
  };
  return (
    <LoginContainer>
      <Text bold="800" size="2em">
        로그인
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
          title={'비밀번호'}
          placeholder={'비밀번호를 입력하세요'}
          setValue={setPw}
        />
      </Grid>
      <Grid padding={'0px'}>
        <Button
          disable={id && pw}
          _onClick={onLogin}
          type="full"
          bgColor="black"
          color="white"
        >
          로그인
        </Button>
      </Grid>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Form;
