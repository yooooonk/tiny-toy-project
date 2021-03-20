import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBucket } from './redux/modules/bucket';

const Detail = (props) => {
  const bucket_list = useSelector((state) => state.bucket.list);
  const dispatch = useDispatch();
  const bucketIdx = parseInt(props.match.params.index);
  const onDeleteBucket = () => {
    dispatch(deleteBucket(bucketIdx));
    props.history.push('/');
  };
  return (
    <div>
      <h1>{bucket_list[bucketIdx]}</h1>
      <button onClick={onDeleteBucket}>삭제하기</button>
    </div>
  );
};

export default Detail;
