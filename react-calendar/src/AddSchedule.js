import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { MdChevronLeft } from 'react-icons/md';
import Datepicker from './Datepicker';
import { Button, TextField, makeStyles } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { createSchedule } from './redux/modules/schedule';

const AddSchedule = ({ history }) => {
  const [date, setDate] = useState();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [titleError, setTitleError] = useState(false);
  const dispatch = useDispatch();

  const useStyles = makeStyles((theme) => ({
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 250,
      textAlign: 'center'
    }
  }));

  const classes = useStyles();

  const onAddSchedule = () => {
    if (checkValid()) {
      const yyyymmdd = date.split('T')[0].replaceAll('-', '');
      const time = date.split('T')[1].replaceAll(':', '');
      const data = { date: yyyymmdd, time, title, description };

      dispatch(createSchedule(data));

      history.push('/');
    }
  };

  const checkValid = () => {
    if (title.length === 0 || title.trim().length === 0) {
      setTitleError(true);
      return false;
    }

    return true;
  };
  return (
    <div>
      <Header>
        <MdChevronLeft
          onClick={() => {
            history.goBack();
          }}
        />
        일정 추가 &nbsp;&nbsp;&nbsp;
        <i />
      </Header>
      <Body>
        <Datepicker setDate={setDate} />
        <TextField
          id="standard-basic"
          label="어떤 일정이 있나요?"
          error={titleError}
          className={classes.textField}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <TextField
          id="outlined-multiline-static"
          label="간단 메모"
          multiline
          rows={4}
          variant="outlined"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <Button variant="contained" color="secondary" onClick={onAddSchedule}>
          + ADD
        </Button>
      </Body>
    </div>
  );
};

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
export default AddSchedule;
