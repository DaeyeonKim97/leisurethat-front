/** @format */

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
import PaymentPagenation from './PaymentPagenation'
import IconButton from '@mui/material/IconButton'
import PageviewIcon from '@mui/icons-material/Pageview'
import OutstandingInfoModal from '../Outstanding/OutstandingInfoModal'
import OutstandingModalInfo from './OutstandingModalInfo'
import CancelModel from './CancelModel'

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

function createData(
  orderId,
  memberNo,
  memberName,
  orderState,
  date,
  amount,
  rewards,
  option
) {
  return {
    orderId,
    memberNo,
    memberName,
    orderState,
    date,
    amount,
    rewards,
    option,
  }
}

const rows = [
  createData(
    1,
    1,
    '김주승',
    '결제완료',
    '2022-01-01',
    '21,000원',
    '리워드 명',
    '옵션 명'
  ),
  createData(
    2,
    2,
    '손창우',
    '결제대기',
    '2022-01-01',
    '21,000원',
    '리워드 명',
    '옵션 명'
  ),
  createData(
    3,
    3,
    '최재혁',
    '결제 취소 요청',
    '2022-01-01',
    '21,000원',
    '리워드 명',
    '옵션 명'
  ),
  createData(
    4,
    4,
    '최영우',
    '결제 대기',
    '2022-01-01',
    '21,000원',
    '리워드 명',
    '옵션 명'
  ),
  createData(
    5,
    5,
    '노재원',
    '결제완료',
    '2022-01-01',
    '21,000원',
    '리워드 명',
    '옵션 명'
  ),
  createData(
    6,
    6,
    '호이에메모',
    '결제완료',
    '2022-01-01',
    '21,000원',
    '리워드 명',
    '옵션 명'
  ),
]

export default function OutstandingTable() {
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
          전체 결과 검색 조건에 변경됨
        </Typography>
        <Table
          sx={{ minWidth: 700, height: '0.8' }}
          style={{ flex: 1 }}
          aria-label="customized table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">주문 번호</StyledTableCell>
              <StyledTableCell align="center">고객 번호</StyledTableCell>
              <StyledTableCell align="center">후원자 정보</StyledTableCell>
              <StyledTableCell align="center">상태</StyledTableCell>
              <StyledTableCell align="center">프로젝트명</StyledTableCell>
              <StyledTableCell align="center">펀딩 금액</StyledTableCell>
              <StyledTableCell align="center">리워드</StyledTableCell>
              <StyledTableCell align="center">취소 이력</StyledTableCell>
              <StyledTableCell align="center">상세조회</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.orderId} hover>
                <StyledTableCell
                  component="th"
                  align="center"
                  scope="row"
                  sx={{ width: 100 }}
                >
                  {row.orderId}
                </StyledTableCell>
                <StyledTableCell align="center">{row.memberNo}</StyledTableCell>
                <StyledTableCell align="center">
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {row.memberName}
                    <OutstandingInfoModal>
                      <IconButton
                        color="primary"
                        aria-label="add to shopping cart"
                      >
                        <PageviewIcon />
                      </IconButton>
                    </OutstandingInfoModal>
                  </div>
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.orderState}
                  <br />
                  {row.date}
                </StyledTableCell>
                <StyledTableCell align="center">{row.amount}</StyledTableCell>
                <StyledTableCell align="center">{row.rewards}</StyledTableCell>
                <StyledTableCell align="center">{row.option}</StyledTableCell>
                <StyledTableCell align="center">
                  <OutstandingModalInfo>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Button variant="outlined" size="midium">
                        취소 이력
                      </Button>
                    </div>
                  </OutstandingModalInfo>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <CancelModel>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Button variant="outlined" size="midium">
                        결제 정보
                      </Button>
                    </div>
                  </CancelModel>
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
        <PaymentPagenation />
      </div>
    </>
  )
}
