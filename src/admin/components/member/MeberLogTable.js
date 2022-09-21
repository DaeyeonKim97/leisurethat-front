import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(id, modifyDate) {
  return { id, modifyDate };
}

const rows = [
  createData(1,'2022-09-01'),
  createData(2,'2022-09-02'),
  createData(3,'2022-09-03'),
  createData(4,'2022-09-04'),
  createData(5,'2022-09-05'),

];

export default function DenseTable() {
  return (
    <TableContainer sx={{ width: 500 }} component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell align="right">변경일자</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.modifyDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}