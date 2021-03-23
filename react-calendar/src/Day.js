import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
const Day = ({ dateInfo }) => {
  const { thisMonth } = useSelector((state) => state.schedule);
  const mapToPlan = () => {
    let com = thisMonth.map((item, idx) => {
      if (item.date === dateInfo.fullDate) {
        console.log('gg');
        return <Plan key={idx}>{dateInfo.title}</Plan>;
      }
    });
    console.log(com);
    return com;
  };

  return (
    <D>
      <span className="title">{dateInfo.day}</span>
    </D>
  );
};

const D = styled.div`
  border: 1px solid black;
  width: 30vh;
  height: 12vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  & > .title {
    text-align: right;
  }
`;

const Plan = styled.span`
  text-align: center;
  background-color: yellow;
  font-size: 0.8em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 1px 0;
`;

export default Day;
