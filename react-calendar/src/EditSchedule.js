import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { MdChevronLeft } from 'react-icons/md';
import Datepicker from './Datepicker';
import { Button, TextField, makeStyles, ButtonGroup } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import {
  createSchedule,
  deleteSchedule,
  openEditPopup,
  updateSchedule
} from './redux/modules/schedule';

const EditSchedule = ({ history }) => {
  const dispatch = useDispatch();
  const { currentSchedule } = useSelector((state) => state.schedule);

  const d = currentSchedule.date;
  const t = currentSchedule.time;
  const [date, setDate] = useState(
    d.slice(0, 4) +
      '-' +
      d.slice(4, 6) +
      '-' +
      d.slice(6) +
      'T' +
      t.slice(0, 2) +
      ':' +
      t.slice(2)
  );
  const inputTitle = useRef();
  const inputDescription = useRef();
  const [titleError, setTitleError] = useState(false);

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& > *': {
        margin: theme.spacing(1)
      }
    }
  }));

  const classes = useStyles();

  const onSave = () => {
    if (checkValid()) {
      const yyyymmdd = date.split('T')[0].replaceAll('-', '');
      const time = date.split('T')[1].replaceAll(':', '');
      const title = inputTitle.current.value;
      const description = inputDescription.current.value;

      const data = {
        date: yyyymmdd,
        time,
        title,
        description,
        id: currentSchedule.id
      };

      dispatch(updateSchedule(data));
      dispatch(openEditPopup(false));
    }
  };

  const checkValid = () => {
    const title = inputTitle.current.value;

    if (title.length === 0 || title.trim().length === 0) {
      setTitleError(true);
      return false;
    }

    return true;
  };

  const onComplete = () => {
    const data = { ...currentSchedule, completed: true };
    dispatch(updateSchedule(data));
    dispatch(openEditPopup(false));
  };

  const onDelete = () => {
    dispatch(deleteSchedule(currentSchedule.id));
    dispatch(openEditPopup(false));
  };

  return (
    <Popup>
      <Header>
        <MdChevronLeft
          onClick={() => {
            dispatch(openEditPopup(false));
          }}
        />
        일정 보기 &nbsp;&nbsp;&nbsp;
        <i />
      </Header>
      <Body>
        <Datepicker setDate={setDate} date={date} />
        <TextField
          id="standard-basic"
          label="어떤 일정이 있나요?"
          defaultValue={currentSchedule.title}
          error={titleError}
          className={classes.textField}
          inputRef={inputTitle}
          onChange={(e) => {
            //setTitle(e.target.value);
          }}
        />
        <TextField
          id="outlined-multiline-static"
          label="간단 메모"
          multiline
          defaultValue={currentSchedule.description}
          inputRef={inputDescription}
          rows={4}
          variant="outlined"
          onChange={(e) => {
            //setDescription(e.target.value);
          }}
        />
        <ButtonGroup
          color="secondary"
          aria-label="outlined secondary button group"
        >
          <Button disabled={currentSchedule.completed} onClick={onComplete}>
            완료
          </Button>
          <Button onClick={onSave}>저장</Button>
          <Button onClick={onDelete}>삭제</Button>
        </ButtonGroup>
      </Body>
    </Popup>
  );
};

const Popup = styled.div`
  position: fixed;
  z-index: 2;
  background-color: white;
`;
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

const Body = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100vw;
`;
export default EditSchedule;
