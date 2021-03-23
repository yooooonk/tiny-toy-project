import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
const Day = ({ dateInfo }) => {
  const { fullSchedule } = useSelector((state) => state.schedule);
  /* if (fullSchedule.length > 0) {
    const fil = fullSchedule.filiter((item, idx) => {
      return item.date === dateInfo.fullDate;
    });
    console.log(fil);
  } */

  return (
    <D>
      <span>{dateInfo.day}</span>
    </D>
  );
};

const D = styled.div`
  border: 1px solid black;
  width: 30px;

  & span {
    background-color: #97b484;
    border-radius: 50%;
  }
`;

const plan = styled.div``;

export default Day;
