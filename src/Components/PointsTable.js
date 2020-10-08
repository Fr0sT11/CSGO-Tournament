import React from 'react';
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

function createData(players, won, lost, drawn, points, rd) {
  return { players, won, lost, drawn, points, rd };
}

const rows = [
  createData('aavashsilwal', 2, 0, 0, 6, '+20'),
  createData('pandeysuyog', 2, 1, 0, 6, '+17'),
  createData('asdfghjkl.kt97', 2, 1, 0, 3, '-6'),
  createData('r_sankalpa', 0, 2, 0, 0, '-12'),
  createData('infinity', 0, 3, 0, 0, '-15'),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function PointsTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Players</StyledTableCell>
            <StyledTableCell align="right">Won</StyledTableCell>
            <StyledTableCell align="right">Lost</StyledTableCell>
            <StyledTableCell align="right">Drawn</StyledTableCell>
            <StyledTableCell align="right">Points</StyledTableCell>
            <StyledTableCell align="right">RD</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.players}>
              <StyledTableCell component="th" scope="row">
                {row.players}
              </StyledTableCell>
              <StyledTableCell align="right">{row.won}</StyledTableCell>
              <StyledTableCell align="right">{row.lost}</StyledTableCell>
              <StyledTableCell align="right">{row.drawn}</StyledTableCell>
              <StyledTableCell align="right">{row.points}</StyledTableCell>
              <StyledTableCell align="right">{row.rd}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
