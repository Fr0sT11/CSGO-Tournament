import React,{useState, useEffect} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function PointsTable() {
  const classes = useStyles();
  
  const [rows,setRowData]=useState([]);
  
  useEffect(()=>{
    const getTableData=async()=>{
      const res=await fetch('https://kuamr.pythonanywhere.com/create/point');
      const json=await(res.json())
      setRowData(json)
    }
    getTableData();
  })

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Players</StyledTableCell>
            <StyledTableCell align="right">Played</StyledTableCell>
            <StyledTableCell align="right">Won</StyledTableCell>
            <StyledTableCell align="right">Lost</StyledTableCell>
            <StyledTableCell align="right">Drawn</StyledTableCell>
            <StyledTableCell align="right">Points</StyledTableCell>
            <StyledTableCell align="right">RD</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.profile}>
              <StyledTableCell component="th" scope="row">
                {row.profile}
              </StyledTableCell>
              <StyledTableCell align="right">{row.match_played}</StyledTableCell>
              <StyledTableCell align="right">{row.match_won}</StyledTableCell>
              <StyledTableCell align="right">{row.match_loss}</StyledTableCell>
              <StyledTableCell align="right">{row.math_drawn}</StyledTableCell>
              <StyledTableCell align="right">{row.points}</StyledTableCell>
              <StyledTableCell align="right">{row.rd}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
