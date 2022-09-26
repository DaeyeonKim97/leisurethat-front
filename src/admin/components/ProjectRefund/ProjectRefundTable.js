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
import ProjecRefundtInfoModal from './ProjecRefundtInfoModal'
import ProjectDetailsInfoModal from './ProjectDetailsInfoModal'
import ProjectRefundProducer from './ProjectRefundProducer'

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
  fundingId,
  funcdingName,
  producerName,
  state,
  startDate,
  endDate,
  achievements,
  realAchievements,
  payment,
  participants
) {
  return {
    fundingId,
    funcdingName,
    producerName,
    state,
    startDate,
    endDate,
    achievements,
    realAchievements,
    payment,
    participants,
  }
}

const rows = [
  createData(
    101,
    '올바른 텐트',
    '김주승',
    '완료',
    '2022-01-01',
    '2022-02-10',
    '200%',
    '150%',
    '3,000,000원',
    '20'
  ),
  createData(
    102,
    '별무늬 화로',
    '손창우',
    '초과달성',
    '2022-09-01',
    '2022-10-10',
    '200%',
    '900%',
    '30,000,000원',
    '20'
  ),
  createData(
    102,
    '개미 화로',
    '부시연',
    '미달성',
    '2022-09-01',
    '2022-10-10',
    '200%',
    '18%',
    '300,000,000원',
    '18'
  ),
  createData(
    103,
    '꾸진 감래',
    '제작자',
    '미달성',
    '2022-09-01',
    '2022-10-10',
    '200%',
    '18%',
    '300,000,000원',
    '18'
  ),
  createData(
    103,
    '꾸진 감래',
    '제작자',
    '미달성',
    '2022-09-01',
    '2022-10-10',
    '200%',
    '18%',
    '300,000,000원',
    '18'
  ),
  createData(
    103,
    '꾸진 감래',
    '제작자',
    '미달성',
    '2022-09-01',
    '2022-10-10',
    '200%',
    '18%',
    '300,000,000원',
    '18'
  ),
]

export default function ProjectRefundTable() {
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
          전체 결과 검색 조건에 따라 변경됨
        </Typography>
        <Table
          sx={{ minWidth: 700, height: '0.8' }}
          style={{ flex: 1 }}
          aria-label="customized table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell align="center" sx={{ width: 130 }}>
                펀딩 번호
              </StyledTableCell>
              <StyledTableCell align="center">프로젝트 명</StyledTableCell>
              <StyledTableCell align="center">제작자 정보</StyledTableCell>
              <StyledTableCell align="center">상태</StyledTableCell>
              <StyledTableCell align="center">시작일</StyledTableCell>
              <StyledTableCell align="center">종료일</StyledTableCell>
              <StyledTableCell align="center">달성률</StyledTableCell>
              <StyledTableCell align="center">실 결제률</StyledTableCell>
              <StyledTableCell align="center">실 결제 금액</StyledTableCell>
              <StyledTableCell align="center">참여자 정보</StyledTableCell>
              <StyledTableCell align="center">조회</StyledTableCell>
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
                  {row.fundingId}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.funcdingName}
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
                    {row.producerName}
                    <ProjectRefundProducer>
                      <IconButton
                        color="primary"
                        aria-label="add to shopping cart"
                      >
                        <PageviewIcon />
                      </IconButton>
                    </ProjectRefundProducer>
                  </div>
                </StyledTableCell>
                <StyledTableCell align="center">{row.state}</StyledTableCell>
                <StyledTableCell align="center">
                  {row.startDate}
                </StyledTableCell>
                <StyledTableCell align="center">{row.endDate}</StyledTableCell>
                <StyledTableCell align="center">
                  {row.achievements}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.realAchievements}
                </StyledTableCell>
                <StyledTableCell align="center">{row.payment}</StyledTableCell>
                <StyledTableCell align="center">
                  <ProjecRefundtInfoModal>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Button variant="outlined" size="midium">
                        참여자{row.participants}명
                      </Button>
                    </div>
                  </ProjecRefundtInfoModal>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <ProjectDetailsInfoModal>
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
                  </ProjectDetailsInfoModal>
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
