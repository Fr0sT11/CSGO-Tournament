import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  accordion:{
    background:'linear-gradient(to right, #485563, #29323c)',
  },
  heading: {
    display:'flex',
    justifyContent:'center',
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '100%',
    flexShrink: 0,
    color:'white',
  },
  player1:{
    paddingRight:'1rem'
  },
  player2:{
    paddingLeft:'1rem'
  },
  winnerScore:{
    color:'#90EE90',
  },
  loserScore:{
    color:'red',
  },
}));

export default function Results() {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const[results, setResults]=useState([]);

  useEffect(()=>{
    const getResults=async()=>{
      const res=await fetch('https://kuamr.pythonanywhere.com/matches/')
      const json=await res.json();
      setResults(json);
    }
    getResults();
  });

  return (
    <div className={classes.root}>
      {results
      .filter(match=>{
        return match.Winner;
      })
      .map(result=>{
        return(
        <Accordion className={classes.accordion} expanded={expanded === `panel${result.id}`} onChange={handleChange(`panel${result.id}`)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${result.id}bh-content`}
            id={`panel${result.id}`}
          >
            <Typography className={classes.heading}>
            <Grid
              container
              direction='row'
              justify='center' 
              align='center'
            >
                <Typography className={classes.player1}>{result.player1}</Typography>
                <Typography 
                className={
                  (result.player1_points>=result.player2_points)?classes.winnerScore:classes.loserScore
                }>{result.player1_points}</Typography>
                :
                <Typography
                 className={
                  (result.player2_points>=result.player1_points)?classes.winnerScore:classes.loserScore
                 }>{result.player2_points}</Typography>
                <Typography className={classes.player2}>{result.player2}</Typography>
              </Grid>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Work On progress! Match details will be provided soon.
            </Typography>
          </AccordionDetails>
        </Accordion>

        )        
      })}
      {/* <Accordion className={classes.accordion} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>
          <Grid
            container
            direction='row'
            justify='center' 
            align='center'
          >
              aavashsilwal
              <Typography className={classes.winnerScore}>16</Typography>
              :
              <Typography className={classes.loserScore}>4</Typography>
              asdfghjkl.kt97
            </Grid>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
            Work On progress! Match details will be provided soon.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.accordion} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>
          <Grid
            container
            direction='row'
            justify='center' 
            align='center'
          >
              asdfghjkl.kt97
              <Typography className={classes.winnerScore}>16</Typography>
              :
              <Typography className={classes.loserScore}>13</Typography>
              r_sankalpa
          </Grid>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
            Work On progress! Match details will be provided soon.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.accordion} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>
          <Grid
            container
            direction='row'
            justify='center' 
            align='center'
          >
              aavashsilwal
              <Typography className={classes.winnerScore}>16</Typography>
              :
              <Typography className={classes.loserScore}>8</Typography>
              pandeysuyog2013
          </Grid>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
            Work On progress! Match details will be provided soon.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.accordion} expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography className={classes.heading}>
              asdfghjkl.kt97
              <Typography className={classes.winnerScore}>16</Typography>
              :
              <Typography className={classes.loserScore}>13</Typography>
              infinity
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
            Work On progress! Match details will be provided soon.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.accordion} expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6bh-content"
          id="panel6bh-header"
        >
          <Typography className={classes.heading}>
              pandeysuyog2013
              <Typography className={classes.winnerScore}>16</Typography>
              :
              <Typography className={classes.loserScore}>7</Typography>
              r_sankalpa
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
            Work On progress! Match details will be provided soon.
          </Typography>
        </AccordionDetails>
      </Accordion> */}
    </div>
  );
}
