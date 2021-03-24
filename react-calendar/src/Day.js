import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { openEditPopup } from './redux/modules/schedule';
const Day = ({ dateInfo }) => {
  const schedule = dateInfo.todaySch;

  const dispatch = useDispatch();
  const openPopup = (schedule) => {
    dispatch(openEditPopup({ isOpen: true, schedule }));
  };
  const mapToPlan = schedule.map((s, idx) => {
    return (
      <Plan
        key={idx}
        data={s}
        color={schedule.completed ? 'gray' : 'skyblue'}
        onClick={() => {
          openPopup(s);
        }}
      >
        {s.title}
      </Plan>
    );
  });

  return (
    <D>
      <span className="title">{dateInfo.day}</span>
      {mapToPlan}
    </D>
  );
};

const D = styled.div`
  border: 1px solid black;
  width: 30vh;
  height: 12vh;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  overflow: hidden;
  & > .title {
    text-align: right;
  }
`;

const Plan = styled.span`
  text-align: center;
  background-color: ${(props) => props.color};
  font-size: 0.8em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 1px 0;
  height: 30px;
`;

export default Day;
