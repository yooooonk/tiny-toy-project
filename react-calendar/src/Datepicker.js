import React, { useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import moment from 'moment';
const Datepicker = () => {
  //const pickedData = useRef(null);

  const current =
    moment().format().split(':')[0] + ':' + moment().format().split(':')[1];

  const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center'
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 250
    },
    palette: {
      primary: {
        main: '#f44336'
      },
      secondary: {
        main: '#3f51b5'
      }
    }
  }));
  const classes = useStyles();
  return (
    <form className={classes.container} noValidate>
      <TextField
        id="datetime-local"
        type="datetime-local"
        defaultValue={current}
        className={classes.textField}
        onChange={(e) => {
          console.log(e.target.value);
        }}
        InputLabelProps={{
          shrink: true
        }}
      />
    </form>
  );
};

export default Datepicker;
