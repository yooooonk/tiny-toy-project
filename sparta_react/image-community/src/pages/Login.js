import React from 'react';
import { Text, Input, Grid, Button } from '../elements';
import { getCookie, setCookie, deleteCookie } from '../shared/Cookie';

import { useDispatch } from 'react-redux';
import { actionCreators as userActions } from '../redux/modules/user';
import { emailCheck } from '../shared/common';

const Login = (props) => {
  const dispatch = useDispatch();

  const [id, setId] = React.useState('');
  const [pwd, setPwd] = React.useState('');

  const login = () => {
    if (id === '' || pwd === '') {
      window.alert('아이디 혹은 비밀번호가 공란입니다! 입력해주세요!');
      return;
    }
    if (!emailCheck(id)) {
      return alert('이메일 형식으로 입력해주세요');
    }

    dispatch(userActions.loginFB(id, pwd));
  };

  return (
    <React.Fragment>
      <Grid padding="16px">
        <Text size="32px" bold>
          로그인
        </Text>

        <Grid padding="16px 0px">
          <Input
            label="아이디"
            placeholder="아이디를 입력해주세요."
            _onChange={(e) => {
              setId(e.target.value);
            }}
          />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            label="패스워드"
            placeholder="패스워드 입력해주세요."
            type="password"
            _onChange={(e) => {
              setPwd(e.target.value);
            }}
          />
        </Grid>

        <Button
          text="로그인하기"
          _onClick={() => {
            console.log('로그인 했어!');
            login();
          }}
        ></Button>
      </Grid>
    </React.Fragment>
  );
};

export default Login;
