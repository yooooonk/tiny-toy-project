import React, { useEffect, useState } from 'react';
import moment from 'moment';
import 'moment/locale/ko';
import styled from 'styled-components';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { filterThisMonth, readSchedule } from './redux/modules/schedule';
import Day from './Day';
const Calendar = ({ history }) => {
  const [today, setToday] = useState(moment());
  const dispatch = useDispatch();
  useEffect(() => {
    const startDay = today.clone().startOf('month').format('YYYYMMDD');
    const endDay = today.clone().endOf('month').format('YYYYMMDD');
    dispatch(readSchedule({ startDay, endDay }));
  }, []);

  const movePrevMonth = () => {
    setToday(today.clone().subtract(1, 'month'));
    const startDay = today
      .clone()
      .subtract(1, 'months')
      .startOf('month')
      .format('YYYYMMDD');
    const endDay = today
      .clone()
      .subtract(1, 'months')
      .endOf('month')
      .format('YYYYMMDD');

    dispatch(filterThisMonth({ startDay, endDay }));
  };

  const moveNextMonth = () => {
    setToday(today.clone().add(1, 'month'));

    const startDay = today
      .clone()
      .add(1, 'months')
      .startOf('month')
      .format('YYYYMMDD');
    const endDay = today
      .clone()
      .add(1, 'months')
      .endOf('month')
      .format('YYYYMMDD');

    dispatch(filterThisMonth({ startDay, endDay }));
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

              let fullDate = today
                .clone()
                .startOf('year')
                .week(w)
                .startOf('week')
                .add(idx, 'day')
                .format('l')
                .replaceAll('.', '');

              let dateInfo = { day, fullDate, dow: idx };

              return <Day key={n + idx} dateInfo={dateInfo}></Day>;
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
            <Dow>
              <span>일</span>
            </Dow>
            <Dow>
              <span>월</span>
            </Dow>
            <Dow>
              <span>화</span>
            </Dow>
            <Dow>
              <span>수</span>
            </Dow>
            <Dow>
              <span>목</span>
            </Dow>
            <Dow>
              <span>금</span>
            </Dow>
            <Dow>
              <span>토</span>
            </Dow>
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
`;

const Dow = styled.div`
  border: 1px solid black;
  width: 100%;
  text-align: center;
  & span {
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
