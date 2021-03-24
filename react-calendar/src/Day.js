import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { openEditPopup } from './redux/modules/schedule';
const Day = ({ dateInfo, className }) => {
  const schedule = dateInfo.currentSch;
  const dispatch = useDispatch();
  const openPopup = (schedule) => {
    dispatch(openEditPopup({ isOpen: true, schedule }));
  };
  schedule.sort((a, b) => a.time - b.time);
  const mapToPlan = schedule.map((s, idx) => {
    return (
      <Plan
        key={idx}
        className={`${s.completed ? 'completed' : ''}`}
        data={s}
        onClick={() => {
          openPopup(s);
        }}
      >
        {s.title}
      </Plan>
    );
  });

  return (
    <D className={className}>
      <span className="title">{dateInfo.day}</span>
      {mapToPlan}
    </D>
  );
};

const D = styled.div`
  padding-top: 4px;
  height: 12vh;
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
  flex-wrap: nowrap;
  overflow: hidden;

  &.grayed {
    color: gray;
  }

  &.today > .title {
    color: white;
    background-color: skyblue;
  }

  & > .title {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 30px;
    height: 30px;
  }
`;

const Plan = styled.span`
  text-align: center;
  //background-color: ${(props) => props.color};
  font-size: 0.8em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 1px 0;
  height: 20px;
  width: 100%;
  border-radius: 7px;
  background-color: #ff9aa3;
  color: white;
  cursor: pointer;
  &.completed {
    background-color: #bfbfbf;
  }
`;

export default Day;
