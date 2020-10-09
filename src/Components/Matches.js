import React,{useState, useEffect} from 'react';
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



export default function Matches(props) {
  const classes = useStyles();

  const[matches, setMatches]=useState([]);

  useEffect(()=>{
    const getMatches=async()=>{
      const res=await fetch('http://kuamr.pythonanywhere.com/matches/')
      const json=await res.json();
      setMatches(json);
      console.log(matches)
    }
    getMatches();
  });

  return (
    <List component="nav" className={classes.root} aria-label="mailbox folders">
      {matches
      .filter(match=>{
        return !match.Winner;
      })
      .map(match=>{
        return(
          <React.Fragment>
          <ListItem button>
          <Grid
            container
            direction='row'
            justify='center'  
          >
            <ListItemText className={classes.player1} primary={match.player1} />
            <span style={{fontSize:'150%'}}>V</span>
            <ListItemText className={classes.player2} primary={match.player2} />
          </Grid>
          </ListItem>
          <Divider />
          </React.Fragment>
        )
      })}
    </List>
  );
}