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
import SponeorInfoModal from '../Payment/SponeorInfoModal'
import PaymentModalInfo from './PaymentInfoModal'
import RefundModal from './RefundModal'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { adminPayments } from '../../apis/Payment/adminPaymentAPI'

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

export default function PaymentTable() {
  const dispatch = useDispatch()
  const payments = useSelector((state) => state.adminPaymentHandler)
  useEffect(() => {
    dispatch(adminPayments())
  }, [])

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
                주문 번호
              </StyledTableCell>
              <StyledTableCell align="center">고객 번호</StyledTableCell>
              <StyledTableCell align="center">후원자 정보</StyledTableCell>
              <StyledTableCell align="center">상태</StyledTableCell>
              <StyledTableCell align="center">펀딩 금액</StyledTableCell>
              <StyledTableCell align="center">리워드</StyledTableCell>
              <StyledTableCell align="center">옵션명</StyledTableCell>
              <StyledTableCell align="center">배송현황</StyledTableCell>
              <StyledTableCell align="center">기능</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {payments.length <= 1
              ? ''
              : payments.map((row) => (
                  <StyledTableRow key={row.payment.paymentId} hover>
                    <StyledTableCell
                      component="th"
                      align="center"
                      scope="row"
                      sx={{ width: 100 }}
                    >
                      {row.payment.paymentId}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.payment.order.member.id}
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
                        {row.payment.order.member.name}
                        <SponeorInfoModal>
                          <IconButton
                            color="primary"
                            aria-label="add to shopping cart"
                          >
                            <PageviewIcon />
                          </IconButton>
                        </SponeorInfoModal>
                      </div>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.payment.paymentStatus}
                      <br />
                      {row.payment.paymentReserveDate}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.payment.paymentPrice}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.payment.order.reward.title}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.payment.order.reward.content}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <PaymentModalInfo date={row}>
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <Button variant="outlined" size="midium">
                            배송 현황
                          </Button>
                        </div>
                      </PaymentModalInfo>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <RefundModal date={row.payment}>
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
                      </RefundModal>
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
