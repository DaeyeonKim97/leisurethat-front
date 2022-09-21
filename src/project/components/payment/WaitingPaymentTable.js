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
import WaitingPaymentPagenation from './WaitingPaymentPagenation'
import IconButton from '@mui/material/IconButton'
import PageviewIcon from '@mui/icons-material/Pageview'

import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import ProjectInfoModal from '../common/ProjectInfoModal/ProjectInfoModal'
import MemberInfoModal from '../common/MemberInfoModal/MemberInfoModal'

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

function createData(id, memberID, paymentStatus, paymentPrice, reward) {
  return {
    id,
    memberID,
    paymentStatus,
    paymentPrice,
    reward,
  }
}

const rows = [
  createData(1, 'member1212', '결제대기', '25000', '리워드1번'),
  createData(2, 'member1212', '결제대기', '25000', '리워드1번'),
  createData(3, 'member1212', '결제대기', '25000', '리워드1번'),
  createData(4, 'member1212', '결제대기', '25000', '리워드1번'),
  createData(5, 'member1212', '결제대기', '25000', '리워드1번'),
  createData(6, 'member1212', '결제대기', '25000', '리워드1번'),
]

export default function WaitingPaymentTable() {
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
                주문ID
              </StyledTableCell>
              <StyledTableCell align="center">후원자ID</StyledTableCell>
              <StyledTableCell align="center">결제 상태</StyledTableCell>
              <StyledTableCell align="center">결제 금액</StyledTableCell>
              <StyledTableCell align="center">리워드</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.id} hover>
                <StyledTableCell component="th" scope="row" sx={{ width: 100 }}>
                  {row.id}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {row.memberID}
                    <MemberInfoModal>
                      <IconButton
                        color="primary"
                        aria-label="add to shopping cart"
                      >
                        <PageviewIcon />
                      </IconButton>
                    </MemberInfoModal>
                  </div>
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.paymentStatus}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.paymentPrice}
                </StyledTableCell>
                <StyledTableCell align="center">{row.reward}</StyledTableCell>
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
        <WaitingPaymentPagenation />
      </div>
    </>
  )
}