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
  schedule.sort((a, b) => a.time - b.time);
  const mapToPlan = schedule.map((s, idx) => {
    return (
      <Plan
        key={idx}
        data={s}
        color={s.completed ? 'gray' : 'skyblue'}
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
  padding-top: 4px;
  height: 12vh;
  display: flex;
  width: 100%;
  flex-direction: column;
  flex-wrap: nowrap;
  overflow: hidden;
  & > .title {
    text-align: center;
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
