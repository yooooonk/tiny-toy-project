import React, { useEffect, useState } from 'react';
import moment from 'moment';
import 'moment/locale/ko';
import styled from 'styled-components';
import {
  MdChevronLeft,
  MdChevronRight,
  MdDehaze,
  MdCheck,
  MdDoneAll,
  MdEdit
} from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { filterThisMonth, readSchedule } from './redux/modules/schedule';
import Day from './Day';
const Calendar = ({ history }) => {
  const { thisMonth } = useSelector((state) => state.schedule);
  const [current, setCurrent] = useState(moment());
  const [isFilter, setIsFiliter] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const startDay = current.clone().startOf('month').format('YYYYMMDD');
    const endDay = current.clone().endOf('month').format('YYYYMMDD');
    dispatch(readSchedule({ startDay, endDay }));
  }, [current, dispatch]);

  const movePrevMonth = () => {
    setCurrent(current.clone().subtract(1, 'month'));
    const startDay = current
      .clone()
      .subtract(1, 'months')
      .startOf('month')
      .format('YYYYMMDD');
    const endDay = current
      .clone()
      .subtract(1, 'months')
      .endOf('month')
      .format('YYYYMMDD');

    dispatch(filterThisMonth({ startDay, endDay }));
  };

  const moveNextMonth = () => {
    setCurrent(current.clone().add(1, 'month'));

    const startDay = current
      .clone()
      .add(1, 'months')
      .startOf('month')
      .format('YYYYMMDD');
    const endDay = current
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
    const startWeek = current.clone().startOf('month').week();
    const endWeek =
      current.clone().endOf('month').week() === 1
        ? 53
        : current.clone().endOf('month').week();

    // 날짜
    let calendar = [];

    for (let w = startWeek; w <= endWeek; w++) {
      calendar.push(
        <Weekend key={w}>
          {Array(7)
            .fill(0)
            .map((n, idx) => {
              const noFormatDate = current
                .clone()
                .startOf('year')
                .week(w)
                .startOf('week')
                .add(idx, 'day');

              const day = noFormatDate.format('D');
              const fullDate = noFormatDate.format('l').replaceAll('.', '');
              const isToday =
                noFormatDate.format('YYYYMMDD') === moment().format('YYYYMMDD')
                  ? 'today'
                  : '';
              const isGrayed =
                noFormatDate.format('MM') === current.format('MM')
                  ? ''
                  : 'grayed';

              const currentSch = thisMonth.filter((s) => {
                return s.date === fullDate;
              });

              const dateInfo = { day, fullDate, dow: idx, currentSch };
              return (
                <Day
                  key={n + idx}
                  dateInfo={dateInfo}
                  className={`${isGrayed} ${isToday}`}
                />
              );
            })}
        </Weekend>
      );
    }
    return calendar;
  };

  const onFilter = (isFilter) => {
    setIsFiliter(isFilter);
  };

  return (
    <div>
      <CalendarWrapper>
        <Header>
          <MdChevronLeft
            className="dir"
            onClick={movePrevMonth}
          ></MdChevronLeft>
          <span>{current.format('MMMM')}</span>
          <MdChevronRight
            className="dir"
            onClick={moveNextMonth}
          ></MdChevronRight>
        </Header>
        <DateContainer>
          <Weekend className="row">
            <Dow color="#ff4b4b">
              <span>S</span>
            </Dow>
            <Dow>
              <span>M</span>
            </Dow>
            <Dow>
              <span>T</span>
            </Dow>
            <Dow>
              <span>W</span>
            </Dow>
            <Dow>
              <span>T</span>
            </Dow>
            <Dow>
              <span>F</span>
            </Dow>
            <Dow color="#4b87ff">
              <span>S</span>
            </Dow>
          </Weekend>
          {generate()}
        </DateContainer>
      </CalendarWrapper>
      <ButtonWrapper>
        {isFilter ? (
          <MdCheck
            onClick={() => onFilter(false)}
            bgColor={'pink'}
            className={'filterBtn subBtn'}
          />
        ) : (
          <MdDoneAll
            onClick={() => onFilter(true)}
            bgColor={'pink'}
            className={'filterBtn subBtn'}
          />
        )}
        <MdEdit
          onClick={goToAddSchedule}
          backgroundColor={'sk'}
          className={'writeBtn subBtn'}
        />
        <MdDehaze backgroundColor={'pink'} className={'menuBtn'} />
      </ButtonWrapper>
    </div>
  );
};

const ButtonWrapper = styled.div`
  position: absolute;
  left: 90vw;
  top: 60vh;
  text-align: center;
  padding-bottom: 3px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  height: 150px;

  &:hover .subBtn {
    opacity: 1;
    visibility: visible;
    top: 0;
  }

  & > svg {
    cursor: pointer;

    border-radius: 50%;
    color: white;
    width: 25px;
    height: 25px;
    padding: 10px;

    &.filterBtn {
      background-color: pink;
      z-index: 1;
      transition: all 0.4s ease;
    }

    &.writeBtn {
      background-color: skyblue;
      z-index: 2;
      transition: all 0.5s ease;
    }

    &.menuBtn {
      background-color: #ffdb0d;
      z-index: 3;
    }

    &.subBtn {
      opacity: 0;
      visibility: hidden;
      top: 60px;
      position: relative;
    }
  }
`;

const CalendarWrapper = styled.div`
  position: relative;
`;

const Header = styled.div`
  height: 7vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 3px;
  font-size: 1.5em;

  & > span {
    margin: 0 100px;
  }
  & > .dir {
    color: #cccccc;

    &:hover {
      cursor: pointer;
    }
  }
`;

const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1vw;
`;

const Weekend = styled.div`
  display: flex;
`;

const Dow = styled.div`
  border-bottom: 1px solid gray;
  width: 100%;
  height: 35px;
  color: ${(props) => (props.color ? props.color : 'black')};
  text-align: center;
  & span {
  }
`;

const AddButton = styled.div`
  position: absolute;
  left: 90vw;
  top: 80vh;
  border-radius: 50%;
  text-align: center;
  padding-bottom: 3px;
  width: 40px;
  height: 40px;
  background-color: #ffdb0d;
  color: white;
  font-size: 30px;
  font-weight: 700;
`;
export default Calendar;
