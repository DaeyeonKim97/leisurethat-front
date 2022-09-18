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
import JudgePagenation from './JudgePagenation'
import IconButton from '@mui/material/IconButton'
import PageviewIcon from '@mui/icons-material/Pageview'

import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import ProjectInfoModal from '../commons/ProjectInfoModal/ProjectInfoModal'
import MakerInfoModal from '../commons/MakerInfoModal/MakerInfoModal'
import JudgeRefuseModal from './JudgeRefuseModal'
import JudgeAcceptModal from './JudgeAcceptModal'

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

function createData(id, name, makerID, submit, created, accept) {
  return {
    id,
    name,
    makerID,
    submit,
    created,
    accept,
  }
}

const rows = [
  createData(1, '프로젝트 명', 'leisurethat01', 1, '2022-01-01', 'Y'),
  createData(2, '프로젝트 명', 'leisurethat01', 1, '2022-01-01', 'Y'),
  createData(3, '프로젝트 명', 'leisurethat01', 1, '2022-01-01', 'Y'),
  createData(4, '프로젝트 명', 'leisurethat01', 1, '2022-01-01', 'Y'),
  createData(5, '프로젝트 명', 'leisurethat01', 1, '2022-01-01', 'Y'),
  createData(6, '프로젝트 명', 'leisurethat01', 1, '2022-01-01', 'Y'),
]

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
                심사아이디
              </StyledTableCell>
              <StyledTableCell align="center">프로젝트명</StyledTableCell>
              <StyledTableCell align="center">제작자ID</StyledTableCell>
              <StyledTableCell align="center">제출서류</StyledTableCell>
              <StyledTableCell align="center">심사요청일</StyledTableCell>
              <StyledTableCell align="center">승인/반려</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.id} hover>
                <StyledTableCell component="th" scope="row" sx={{ width: 100 }}>
                  {row.id}
                </StyledTableCell>
                <StyledTableCell align="center">{row.name}</StyledTableCell>
                <StyledTableCell align="center">
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {row.makerID}
                    <MakerInfoModal>
                      <IconButton
                        color="primary"
                        aria-label="add to shopping cart"
                      >
                        <PageviewIcon />
                      </IconButton>
                    </MakerInfoModal>
                  </div>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <ProjectInfoModal>
                    <Button
                      variant="outlined"
                      style={{ margin: '0px 10px' }}
                      size="midium"
                    >
                      제출 서류
                    </Button>
                  </ProjectInfoModal>
                </StyledTableCell>
                <StyledTableCell align="center">{row.created}</StyledTableCell>
                <StyledTableCell align="center">
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <JudgeAcceptModal>
                      <IconButton
                        color="primary"
                        aria-label="add to shopping cart"
                      >
                        <CheckCircleOutlineIcon />
                      </IconButton>
                    </JudgeAcceptModal>
                    <JudgeRefuseModal>
                      <IconButton
                        color="primary"
                        aria-label="add to shopping cart"
                      >
                        <HighlightOffIcon color="error" />
                      </IconButton>
                    </JudgeRefuseModal>
                  </div>
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
        <JudgePagenation />
      </div>
    </>
  )
}
