// 리액트 패키지를 불러옵니다.
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

const BucketList = (props) => {
  const my_lists = useSelector((state) => state.bucket.list);
  const dispatch = useDispatch();

  return (
    <ListStyle>
      {my_lists.map((list, index) => {
        return (
          <ItemStyle
            className="list_item"
            key={index}
            onClick={() => {
              props.history.push('/detail/' + index);
            }}
          >
            {list}
          </ItemStyle>
        );
      })}
    </ListStyle>
  );
};

const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;

const ItemStyle = styled.div`
  padding: 16px;
  margin: 8px;
  background-color: aliceblue;
`;

export default BucketList;
