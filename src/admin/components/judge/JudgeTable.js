import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography,Pagination } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#6297BA",
    color: theme.palette.common.white,
    fontWeight: 'bold',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(even)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(id, name, makerID, submit, created, accept) {
    return {
      id,
      name,
      makerID,
      submit,
      created,
      accept
    };
}

const rows = [
    createData(1, '프로젝트 명', 'leisurethat01',1, '2022-01-01', 'Y'),
    createData(2, '프로젝트 명', 'leisurethat01',1, '2022-01-01', 'Y'),
    createData(3, '프로젝트 명', 'leisurethat01',1, '2022-01-01', 'Y'),
    createData(4, '프로젝트 명', 'leisurethat01',1, '2022-01-01', 'Y'),
    createData(5, '프로젝트 명', 'leisurethat01',1, '2022-01-01', 'Y'),
    createData(6, '프로젝트 명', 'leisurethat01',1, '2022-01-01', 'Y'),
];

export default function JudgeTable() {
  return (
    <TableContainer component={Paper}  sx={{height:'100%'}} style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
        <Typography
            height="62px"
            variant="h6"
            id="tableTitle"
            component="div"
            padding="15px"
            backgroundColor="#6297BAA0"
            color="white"
        >
            전체 결과
        </Typography>
      <Table sx={{ minWidth: 700, height:'0.75' }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align='center' sx={{width:100}}>심사아이디</StyledTableCell>
            <StyledTableCell align="center">프로젝트명</StyledTableCell>
            <StyledTableCell align="center">제작자ID</StyledTableCell>
            <StyledTableCell align="center">제출서류</StyledTableCell>
            <StyledTableCell align="center">심사요청일</StyledTableCell>
            <StyledTableCell align="center">승인/반려</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                    {row.id}
                </StyledTableCell>
                <StyledTableCell align="center">{row.name}</StyledTableCell>
                <StyledTableCell align="center">{row.makerID}</StyledTableCell>
                <StyledTableCell align="center">{row.submit}</StyledTableCell>
                <StyledTableCell align="center">{row.created}</StyledTableCell>
                <StyledTableCell align="center">
                    
                </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <div style={{display:'flex', justifyContent:'center', alignItems:'center', padding:'10px', flex : 1}}>
        <Pagination count={5} color="primary" variant="outlined"/>
      </div>
    </TableContainer>
  );
}