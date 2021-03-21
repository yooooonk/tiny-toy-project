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
            font={list.completed ? 'white' : 'black'}
            color={list.completed ? 'orange' : 'aliceblue'}
            onClick={() => {
              props.history.push('/detail/' + index);
            }}
          >
            {list.text}
          </ItemStyle>
        );
      })}
    </ListStyle>
  );
};

const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  overflow-x: hidden;
  overflow-y: scroll;
`;

const ItemStyle = styled.div`
  padding: 16px;
  margin: 8px;
  color: ${(props) => props.font};
  background-color: ${(props) => props.color};
`;

export default BucketList;
