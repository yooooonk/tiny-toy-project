import React, { useState } from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
const Calendar = ({ history }) => {
  const [today, setToday] = useState(moment());

  const movePrevMonth = () => {
    setToday(today.clone().subtract(1, 'month'));
  };

  const moveNextMonth = () => {
    setToday(today.clone().add(1, 'month'));
  };
  const goToAddSchedule = () => {
    history.push('/addSchedule');
  };
  const generate = () => {
    // 일년은 52주
    const startWeek = today.clone().startOf('month').week();
    const endWeek =
      today.clone().endOf('month').week() === 1
        ? 53
        : today.clone().endOf('month').week();

    //today.clone().week(startWeek).startOf('week').format('YYYYMMDD')
    // 날짜
    let calendar = [];

    for (let w = startWeek; w <= endWeek; w++) {
      calendar.push(
        <Weekend key={w}>
          {Array(7)
            .fill(0)
            .map((n, idx) => {
              let day = today
                .clone()
                .startOf('year')
                .week(w)
                .startOf('week')
                .add(idx, 'day')
                .format('D');

              return (
                <Day
                  key={n + idx}
                  onClick={() => {
                    console.log(day);
                  }}
                >
                  <span>{day}</span>
                </Day>
              );
            })}
        </Weekend>
      );
    }
    return calendar;
  };

  return (
    <div>
      <CalendarWrapper>
        <Header>
          <MdChevronLeft onClick={movePrevMonth}>이전달</MdChevronLeft>
          {today.format('MMMM')}
          <MdChevronRight onClick={moveNextMonth}>다음달</MdChevronRight>
        </Header>
        <DateContainer>
          <Weekend className="row">
            <Day>
              <span>일</span>
            </Day>
            <Day>
              <span>월</span>
            </Day>
            <Day>
              <span>화</span>
            </Day>
            <Day>
              <span>수</span>
            </Day>
            <Day>
              <span>목</span>
            </Day>
            <Day>
              <span>금</span>
            </Day>
            <Day>
              <span>토</span>
            </Day>
          </Weekend>
          {generate()}
        </DateContainer>
      </CalendarWrapper>
      <AddButton onClick={goToAddSchedule}>+</AddButton>
    </div>
  );
};

const CalendarWrapper = styled.div``;

const Header = styled.div`
  height: 7vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3px;

  font-size: 1.5em;

  & * {
    color: #cccccc;
  }
`;

const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Weekend = styled.div`
  display: flex;
  background-color: pink;
`;

const Day = styled.div`
  border: 1px solid black;
  width: 30px;
  & span {
    background-color: #97b484;
    border-radius: 50%;
  }
`;

const AddButton = styled.div`
  position: fixed;
  right: 0;
  margin: 10px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  text-align: center;
  background-color: skyblue;
`;
export default Calendar;
