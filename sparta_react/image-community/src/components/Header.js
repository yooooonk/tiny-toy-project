import React from 'react';
import { Grid, Button } from '../elements';
import { Link } from 'react-router-dom';

const Header = (props) => {
  const { isLogin } = props;
  const logout = () => {
    console.log('로그아웃');
  };

  if (isLogin) {
    return (
      <Grid is_flex>
        <Link to="/myInfo">
          <Button type={'small'}>내 정보</Button>
        </Link>
        <Link to="/notice">
          <Button type={'small'}>알림</Button>
        </Link>
        <Button type={'small'} onClick={logout}>
          로그아웃
        </Button>
      </Grid>
    );
  } else {
    return (
      <Grid is_flex>
        <Link to="/login">
          <Button type={'small'}>로그인</Button>
        </Link>
        <Link to="/signup">
          <Button type={'small'}>회원가입</Button>
        </Link>
      </Grid>
    );
  }
};

Header.defaultProps = {
  isLogin: false
};
export default Header;
