import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBucket, updateBucket } from './redux/modules/bucket';
import styled from 'styled-components';
const Detail = (props) => {
  const bucket_list = useSelector((state) => state.bucket.list);
  const dispatch = useDispatch();
  const bucketIdx = parseInt(props.match.params.index);
  const onDeleteBucket = () => {
    dispatch(deleteBucket(bucketIdx));
    props.history.goBack();
  };

  const onCompletBucket = () => {
    dispatch(updateBucket(bucketIdx));
    props.history.goBack();
  };
  return (
    <ListStyle>
      <h1>{bucket_list[bucketIdx].text}</h1>
      <ButtonWrapper>
        <button onClick={onDeleteBucket}>삭제하기</button>
        <button onClick={onCompletBucket}>완료하기</button>
      </ButtonWrapper>
    </ListStyle>
  );
};
const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
`;

const ButtonWrapper = styled.div`
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

export default Detail;
