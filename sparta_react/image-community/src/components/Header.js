import React from 'react';
import { Grid, Button, Text } from '../elements';
import { Link } from 'react-router-dom';
import { getCookie, deleteCookie } from '../shared/Cookie';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as userAction } from '../redux/modules/user';
const Header = (props) => {
  const { is_login } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(userAction.logout({}));
  };

  if (is_login) {
    return (
      <div>
        <Grid is_flex>
          <Grid is_flex padding="4px 16px">
            <Grid>
              <Text margin="0px" size="24px" bold>
                헬로
              </Text>
            </Grid>

            <Grid is_flex>
              <Button text="내정보"></Button>
              <Button text="알림"></Button>
              <Button _onClick={logout} text="로그아웃"></Button>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  } else {
    return (
      <div>
        <Grid is_flex padding="4px 16px">
          <Grid>
            <Text margin="0px" size="24px" bold>
              헬로
            </Text>
          </Grid>

          <Grid is_flex>
            <Button
              text="로그인"
              _onClick={() => {
                //history.push('/login');
              }}
            ></Button>
            <Button
              text="회원가입"
              _onClick={() => {
                //history.push('/signup');
              }}
            ></Button>
          </Grid>
        </Grid>
      </div>
    );
  }
};

export default Header;
