import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import styles from './InputItem.module.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(0),
      width: '500px', 
    },
  },
}));

export default function InputItem() {
  const classes = useStyles();

//   return (
//     <form className={classes.root} noValidate autoComplete="off">
//       <TextField  id="outlined-basic" label="Что нужно сделать?" variant="outlined" />
//       <input className={styles.input} placeholder="Что нужно сделать?" type="text"></input>
//     </form>
//   );

  return (
    <input className={styles.input} placeholder="Что нужно сделать?" type="text"></input>
  );
}
