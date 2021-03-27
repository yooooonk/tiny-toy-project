import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as postActions } from '../redux/modules/post';
import { Grid, Text, Button, Image, Input } from '../elements';
import Upload from '../shared/Upload';

const PostWrite = (props) => {
  const { history } = props;
  const { is_login } = useSelector((state) => state.user);
  const [contents, setContents] = useState('');
  const dispatch = useDispatch();

  const changeContents = (e) => {
    setContents(e.target.value);
  };
  if (!is_login) {
    return (
      <Grid margin="100px 0px" padding="16px">
        <Text size="32px">앗 잠깐!</Text>
        <Text size="16px">로그인 후에만 글을 쓸 수 있어요!</Text>
        <Button _onClick={() => history.replace('/login')}>
          로그인 하러가기
        </Button>
      </Grid>
    );
  }
  return (
    <React.Fragment>
      <Grid padding="16px">
        <Text margin="0px" size="36px" bold>
          게시글 작성
        </Text>
        <Upload />
      </Grid>

      <Grid>
        <Grid padding="16px">
          <Text margin="0px" size="24px" bold>
            미리보기
          </Text>
        </Grid>

        <Image shape="rectangle" />
      </Grid>

      <Grid padding="16px">
        <Input
          _onChange={changeContents}
          label="게시글 내용"
          placeholder="게시글 작성"
          multiLine
        />
      </Grid>

      <Grid padding="16px">
        <Button
          _onClick={() => dispatch(postActions.addPostFB(contents))}
          text="게시글 작성"
        ></Button>
      </Grid>
    </React.Fragment>
  );
};

export default PostWrite;
