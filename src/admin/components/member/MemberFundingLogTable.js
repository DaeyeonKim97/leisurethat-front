import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(id,fundingDate,paymentDate,paymentWay,paymentPrice,FundingStatus) {
  return { id,fundingDate,paymentDate,paymentWay,paymentPrice,FundingStatus };
}

const rows = [
  createData(1,'2022-08-01','2022-08-15' ,'신용카드','25,200','펀딩취소'),
  createData(2,'2022-07-28','2022-08-15' ,'네이버페이','46,000','결제예정'),
  createData(3,'2022-07-25','2022-08-06' ,'신용카드','33,000','결제완료'),


];

export default function DenseTable() {
  return (
    <TableContainer sx={{ width: 600 }} component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead sx={{bgcolor: '#fff'}}>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell >펀딩예정일</TableCell>
            <TableCell >결제일</TableCell>
            <TableCell >결제수단</TableCell>
            <TableCell >결제금액</TableCell>
            <TableCell >상태</TableCell>
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
              <TableCell align="right">{row.fundingDate}</TableCell>
              <TableCell align="right">{row.paymentDate}</TableCell>
              <TableCell align="right">{row.paymentWay}</TableCell>
              <TableCell align="right">{row.paymentPrice}</TableCell>
              <TableCell align="right">{row.FundingStatus}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}