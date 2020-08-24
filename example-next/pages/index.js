import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import Sidebar from '../src/Sidebar';
import Paper from '@material-ui/core/Paper';
import Appbar from '../src/Appbar';

const useStyles = makeStyles((theme) => ({
  root: {
      display: "flex",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(1),
        width: "20%",
        height: "100%"
      }
  },
  control: {
    padding: theme.spacing(2),
  }
}));


export default function Index() {
  const classes = useStyles();

  return (
    <div >
      <Appbar />
      <div className={classes.root}>
        <Paper elevation={0}> 
          Manuel 
        </Paper>
        <Paper> 
          <Sidebar /> 
        </Paper>
        <Paper elevation={2} />
      </div>
    </div>
    
  );
}
