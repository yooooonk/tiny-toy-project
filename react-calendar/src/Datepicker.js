import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const Datepicker = ({ setDate, date }) => {
  const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center'
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 250,
      textAlign: 'center'
    }
  }));
  const classes = useStyles();
  return (
    <form className={classes.container} noValidate>
      <TextField
        id="datetime-local"
        type="datetime-local"
        defaultValue={date}
        className={classes.textField}
        onChange={(e) => {
          setDate(e.target.value);
        }}
        InputLabelProps={{
          shrink: true
        }}
      />
    </form>
  );
};

export default Datepicker;
