import * as React from 'react'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Typography, Button } from '@mui/material'
import MemberPagenation from './MemberPagenation'
import MemberDetailModal from './MemberDetailModal'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#6297BA',
    color: theme.palette.common.white,
    fontWeight: 'bold',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(even)': {
    backgroundColor: '#E6F4F150',
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))

function createData(id, nickname, name, email, regDate, status) {
  return {
    id,
    nickname,
    name,
    email,
    regDate,
    status,
  }
}

const rows = [
    createData(1,'Nal_rA', '강민','Nal_rA@leisurethat.com','2022-08-01','가입'),
    createData(2,'SLayerS_BoxeR', '임요환','SLayerS_BoxeR@leisurethat.com','2022-08-02','가입'),
    createData(3,'iloveoov', '최연성','Nal_iloveoov@leisurethat.com','2022-08-03','가입'),
    createData(4,'NaDa', '이윤열','NaDa@leisurethat.com','2022-08-04','탈퇴'),
    createData(5,'JD1234', '이제동','JD@leisurethat.com','2022-08-05','탈퇴'),
  ];

export default function JudgeTable() {
  return (
    <>
      <TableContainer
        component={Paper}
        sx={{ height: '95%' }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          height="40px"
          variant="h6"
          id="tableTitle"
          component="div"
          padding="5px 15px"
          backgroundColor="#6297BAA0"
          color="white"
        >
          전체 결과
        </Typography>
        <Table
          sx={{ minWidth: 700, height: '0.8' }}
          style={{ flex: 1 }}
          aria-label="customized table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell align="center" sx={{ width: 130 }}>
                회원id
              </StyledTableCell>
              <StyledTableCell align="center">아이디</StyledTableCell>
              <StyledTableCell align="center">회원명</StyledTableCell>
              <StyledTableCell align="center">이메일</StyledTableCell>
              <StyledTableCell align="center">가입일자</StyledTableCell>
              <StyledTableCell align="center">상태</StyledTableCell>
              <StyledTableCell align="center">상세보기</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.id} hover>
                <StyledTableCell component="th" scope="row" sx={{ width: 100 }}>
                  {row.id}
                </StyledTableCell>
                <StyledTableCell align="center">{row.nickname}</StyledTableCell>
                <StyledTableCell align="center">
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {row.name}
                  </div>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <MemberDetailModal>
                        {row.email}
                  </MemberDetailModal>
                </StyledTableCell>


                <StyledTableCell align="center">{row.regDate}</StyledTableCell>
                
                <StyledTableCell align="center">{row.status}</StyledTableCell>

                <StyledTableCell align="center">
                  <MemberDetailModal id={rows[0].id}>
                    <Button
                      variant="outlined"
                      style={{ margin: '0px 10px' }}
                      size="midium"
                    >
                      상세 조회
                    </Button>
                  </MemberDetailModal>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '10px',
        }}
      >
        <MemberPagenation />
      </div>
    </>
  )
}
