import React from 'react';
import { Grid, Button, Text } from '../elements';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as userAction } from '../redux/modules/user';
import { history } from '../redux/configureStore';
import { apiKey } from '../shared/firebase';
const Header = (props) => {
  const { is_login } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  /*   <Permit>
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
  </Permit>; */

  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;

  const is_session = sessionStorage.getItem(_session_key) ? true : false;

  console.log(is_session);

  if (is_login && is_session) {
    return (
      <React.Fragment>
        <Grid is_flex padding="4px 16px">
          <Grid>
            <Text margin="0px" size="24px" bold>
              헬로
            </Text>
          </Grid>

          <Grid is_flex>
            <Button text="내정보"></Button>
            <Button
              _onClick={() => {
                history.push('/noti');
              }}
              text="알림"
            ></Button>
            <Button
              text="로그아웃"
              _onClick={() => {
                dispatch(userAction.logoutFB());
              }}
            ></Button>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
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
              history.push('/login');
            }}
          ></Button>
          <Button
            text="회원가입"
            _onClick={() => {
              history.push('/signup');
            }}
          ></Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
