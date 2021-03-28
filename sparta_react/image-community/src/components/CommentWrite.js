import React from 'react';
import { actionCreators as commentActions } from '../redux/modules/comment';
import { Grid, Input, Button } from '../elements';
import { useDispatch } from 'react-redux';

const CommentWrite = (props) => {
  const dispatch = useDispatch();
  const { post_id } = props;
  const [commentText, setCommentText] = React.useState('');
  const onChange = (e) => {
    setCommentText(e.target.value);
  };

  const write = () => {
    dispatch(commentActions.addCommentFB(post_id, commentText));
    setCommentText('');
  };
  return (
    <React.Fragment>
      <Grid padding="16px" is_flex>
        <Input
          placeholder="댓글 내용을 입력해주세요 :)"
          _onChange={onChange}
          value={commentText}
          onSubmit={write}
          is_submit
        />
        <Button width="50px" margin="0px 2px 0px 2px" _onClick={write}>
          작성
        </Button>
      </Grid>
    </React.Fragment>
  );
};

export default CommentWrite;
