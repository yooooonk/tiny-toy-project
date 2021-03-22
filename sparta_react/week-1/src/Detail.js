import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBucketFB, updateBucketFB } from './redux/modules/bucket';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
const Detail = (props) => {
  const bucket_list = useSelector((state) => state.bucket.list);
  const dispatch = useDispatch();
  const bucketIdx = parseInt(props.match.params.index);
  const onDeleteBucket = () => {
    dispatch(deleteBucketFB(bucketIdx));
    props.history.goBack();
  };

  const onCompletBucket = () => {
    dispatch(updateBucketFB(bucketIdx));
    props.history.goBack();
  };
  return (
    <ListStyle>
      <h1>{bucket_list[bucketIdx].text}</h1>
      <ButtonGroup>
        <Button onClick={onDeleteBucket}>삭제하기</Button>
        <Button onClick={onCompletBucket}>완료하기</Button>
      </ButtonGroup>
    </ListStyle>
  );
};
const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
`;

/* const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;

  & button {
    border: none;
    width: 100px;
    height: 30px;
    margin: 10px;
    border-radius: 20px;

    &:hover {
      background-color: pink;
      color: white;
    }
  }
`;
 */
export default Detail;
