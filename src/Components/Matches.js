import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    background:'linear-gradient(to right, #485563, #29323c)',
    color:'white',
  },
  player1:{
      width:'100px',
      textAlign:'center'
  },
  player2:{
    width:'100px',
    textAlign:'center'
  },
}));

export default function Matches() {
  const classes = useStyles();

  return (
    <List component="nav" className={classes.root} aria-label="mailbox folders">
      <ListItem button>
      <Grid
        container
        direction='row'
        justify='center'  
      >
        <ListItemText className={classes.player1} primary="aavashsilwal" />
        <span style={{fontSize:'150%'}}>V</span>
        <ListItemText className={classes.player2} primary="r_sankalpa" />
      </Grid>
      </ListItem>
      <Divider />
      <ListItem button>
      <Grid
        container
        direction='row'
        justify='center' 
        align='center'
      >
        <ListItemText className={classes.player1} primary="pandeysuyog2013" />
        <span style={{fontSize:'150%'}}>V</span>
        <ListItemText className={classes.player2} primary="asdfghjkl.kt97" />
      </Grid>
      </ListItem>
      <ListItem button>
      <Grid
        container
        direction='row'
        justify='center'  
      >
        <ListItemText className={classes.player1} primary="infinity" />
        <span style={{fontSize:'150%'}}>V</span>
        <ListItemText className={classes.player2} primary="aavashsilwal" />
      </Grid>
      </ListItem>
      <Divider light />
      <ListItem button>
      <Grid
        container
        direction='row'
        justify='center'  
      >
        <ListItemText className={classes.player1} primary="r_sankalpa" />
        <span style={{fontSize:'150%'}}>V</span>
        <ListItemText className={classes.player2} primary="infinity" />
      </Grid>
      </ListItem>
    </List>
  );
}