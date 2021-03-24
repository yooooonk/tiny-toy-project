import React, { useState } from 'react';
import styled from 'styled-components';
import { MdChevronLeft } from 'react-icons/md';
import Datepicker from './Datepicker';
import { Button, TextField, makeStyles } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { createSchedule } from './redux/modules/schedule';
import moment from 'moment';

const AddSchedule = ({ history }) => {
  const [date, setDate] = useState(
    moment().format().split(':')[0] + ':' + moment().format().split(':')[1]
  );
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
    },
    button: {
      width: '250px',
      backgroundColor: 'skyblue',
      color: 'white'
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
    <Wrapper>
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
        <Datepicker setDate={setDate} date={date} />
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
          className={classes.textField}
          variant="outlined"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <Button
          className={classes.button}
          variant="contained"
          onClick={onAddSchedule}
        >
          + ADD
        </Button>
      </Body>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  background-color: white;
  height: 7vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3px;
  font-size: 1.5em;

  & * {
    color: #cccccc;
    cursor: pointer;
  }

  /* Mobile Device */
  @media screen and (max-width: 767px) {
    width: 100vw;
  }

  /* Tablet Device */
  @media screen and (min-width: 768px) and (max-width: 991px) {
    width: 100vw;
  }

  /* Desktop Device */
  @media screen and (min-width: 992px) {
    width: 30vw;
  }
`;

const Body = styled.div`
  background-color: white;
  padding-top: 6vh;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  /* Mobile Device */
  @media screen and (max-width: 767px) {
    width: 100vw;
  }

  /* Tablet Device */
  @media screen and (min-width: 768px) and (max-width: 991px) {
    width: 100vw;
  }

  /* Desktop Device */
  @media screen and (min-width: 992px) {
    width: 30vw;
  }
`;
export default AddSchedule;
