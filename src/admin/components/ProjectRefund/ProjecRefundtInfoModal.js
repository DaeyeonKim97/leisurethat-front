/** @format */

import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import Paper from '@mui/material/Paper'
import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import PaymentPagenation from './PaymentPagenation'
import ProjectRefundOrderInfo from './ProjectRefundOrderInfo'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  height: 700,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
}

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

function createData(orderId, memberName, payDate, amount, payType, payState) {
  return {
    orderId,
    memberName,
    payDate,
    amount,
    payType,
    payState,
  }
}

const rows = [
  createData(
    101,
    '김주승',
    '2022-01-01',
    '3,000,000원',
    '신용카드',
    '결제 대기'
  ),
  createData(
    102,
    '손창우',
    '2022-01-01',
    '3,000,000원',
    '신용카드',
    '결제 대기'
  ),
  createData(
    103,
    '부시연',
    '2022-01-01',
    '3,000,000원',
    '신용카드',
    '결제 대기'
  ),
  createData(
    104,
    '김대연',
    '2022-01-01',
    '3,000,000원',
    '신용카드',
    '결제 대기'
  ),
  createData(
    105,
    '도모다치',
    '2022-01-01',
    '3,000,000원',
    '신용카드',
    '결제 대기'
  ),
  createData(
    106,
    '호모다치',
    '2022-01-01',
    '3,000,000원',
    '신용카드',
    '결제 대기'
  ),
]

export default function ProjecRefundtInfoModal(props) {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => {
    setOpen(false)
  }

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }))

  return (
    <div>
      <div onClick={handleOpen}>{props.children}</div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            marginBottom={2}
          >
            올바른 텐트 후원자 정보
          </Typography>

          <TableContainer
            component={Paper}
            sx={{ height: '70%' }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Table
              sx={{ minWidth: 700, height: '0.5' }}
              style={{ flex: 1 }}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">주문 번호</StyledTableCell>
                  <StyledTableCell align="center">서포터 명</StyledTableCell>
                  <StyledTableCell align="center">결제 예정일</StyledTableCell>
                  <StyledTableCell align="center">금액</StyledTableCell>
                  <StyledTableCell align="center">결제 방식</StyledTableCell>
                  <StyledTableCell align="center">결제 상태</StyledTableCell>
                  <StyledTableCell align="center">기능</StyledTableCell>
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
                    <StyledTableCell align="center">
                      {row.memberName}
                    </StyledTableCell>

                    <StyledTableCell align="center">
                      {row.payDate}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.amount}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.payType}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.payState}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <ProjectRefundOrderInfo>
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <Button variant="outlined" size="midium">
                            조회
                          </Button>
                        </div>
                      </ProjectRefundOrderInfo>
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
        </Box>
      </Modal>
    </div>
  )
}
