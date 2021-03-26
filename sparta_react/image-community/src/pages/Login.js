import React, { useState } from 'react';
import { Text, Input, Button, Grid } from '../elements';
import styled from 'styled-components';
const Form = (props) => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const onLogin = () => {
    console.log(id, pw);
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
          onClick={onLogin}
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
