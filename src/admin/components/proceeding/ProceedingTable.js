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
import IconButton from '@mui/material/IconButton'
import PageviewIcon from '@mui/icons-material/Pageview'

import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import ProjectInfoModal from '../commons/ProjectInfoModal/ProjectInfoModal'
import MakerInfoModal from '../commons/MakerInfoModal/MakerInfoModal'
import ProceedingRefuseModal from './ProceedingRefuseModal'
import ProceedingPagenation from './ProceedingPagenation'
import ParticipantsInfoModal from '../commons/ParticipantsInfoModal/ParticipantsInfoModal'

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

function createData(id, name, makerID, end, participant, status) {
  return {
    id,
    name,
    makerID,
    end,
    participant,
    status,
  }
}

const rows = [
  createData(1, '프로젝트 명', 'leisurethat01', '2022-01-01', 10, 'Y'),
  createData(2, '프로젝트 명', 'leisurethat01', '2022-01-01', 11, 'Y'),
  createData(3, '프로젝트 명', 'leisurethat01', '2022-01-01', 12, 'Y'),
  createData(4, '프로젝트 명', 'leisurethat01', '2022-01-01', 13, 'N'),
  createData(5, '프로젝트 명', 'leisurethat01', '2022-01-01', 14, 'N'),
  createData(6, '프로젝트 명', 'leisurethat01', '2022-01-01', 15, 'Y'),
]

export default function ProceedingTable({ list, setInit }) {
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
              <StyledTableCell align="center">프로젝트 종료일</StyledTableCell>
              <StyledTableCell align="center">참여자정보</StyledTableCell>
              <StyledTableCell align="center">상태</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list.map((row) => (
              <StyledTableRow key={row.projectId} hover>
                <StyledTableCell
                  component="th"
                  scope="row"
                  sx={{ width: 100 }}
                  align="center"
                >
                  {row.projectId}
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
                    {row.projectName}
                    <ProjectInfoModal projectId={row.projectId}>
                      <IconButton
                        color="primary"
                        aria-label="add to shopping cart"
                      >
                        <PageviewIcon />
                      </IconButton>
                    </ProjectInfoModal>
                  </div>
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
                    {row.makerName}
                    <MakerInfoModal projectId={row.projectId}>
                      <IconButton
                        color="primary"
                        aria-label="add to shopping cart"
                      >
                        <PageviewIcon />
                      </IconButton>
                    </MakerInfoModal>
                  </div>
                </StyledTableCell>
                <StyledTableCell align="center">{row.endDate}</StyledTableCell>
                <StyledTableCell align="center">
                  <ParticipantsInfoModal projectId={row.projectId}>
                    <Button
                      variant="outlined"
                      style={{ margin: '0px 10px' }}
                      size="midium"
                    >
                      총 {row.participantNum} 명
                    </Button>
                  </ParticipantsInfoModal>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'left',
                      marginLeft: '30%',
                    }}
                  >
                    {row.projectStatus === '모집중' ? (
                      <>
                        모집중
                        <ProceedingRefuseModal
                          projectId={row.projectId}
                          setInit={setInit}
                        >
                          <IconButton color="primary">
                            <HighlightOffIcon color="primary" />
                          </IconButton>
                        </ProceedingRefuseModal>
                      </>
                    ) : (
                      <>포기 신청중</>
                    )}
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
        <ProceedingPagenation />
      </div>
    </>
  )
}
