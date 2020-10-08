import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
  winnerScore:{
    paddingLeft:'1rem',
    color:'#90EE90',
  },
  loserScore:{
    paddingRight:'1rem',
    color:'red',
  },
}));

export default function Results() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion className={classes.accordion} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>
              pandeysuyog2013
              <Typography className={classes.winnerScore}>16</Typography>
              :
              <Typography className={classes.loserScore}>4</Typography>
              infinity
          </Typography>
          {/* <Typography className={classes.secondaryHeading}>I am an accordion</Typography> */}
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Work On progress! Match details will be provided soon.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.accordion} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>
              aavashsilwal
              <Typography className={classes.winnerScore}>16</Typography>
              :
              <Typography className={classes.loserScore}>4</Typography>
              asdfghjkl.kt97
          </Typography>
          {/* <Typography className={classes.secondaryHeading}>
            You are currently not an owner
          </Typography> */}
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
              asdfghjkl.kt97
              <Typography className={classes.winnerScore}>16</Typography>
              :
              <Typography className={classes.loserScore}>13</Typography>
              r_sankalpa
          </Typography>
          {/* <Typography className={classes.secondaryHeading}>
            Filtering has been entirely disabled for whole web server
          </Typography> */}
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
              aavashsilwal
              <Typography className={classes.winnerScore}>16</Typography>
              :
              <Typography className={classes.loserScore}>8</Typography>
              pandeysuyog2013
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
      </Accordion>
    </div>
  );
}
