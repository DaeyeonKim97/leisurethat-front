/** @format */

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Button, TextField } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import PageviewIcon from '@mui/icons-material/Pageview';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#6297BA',
    color: theme.palette.common.white,
    fontWeight: 'bold',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(even)': {
    backgroundColor: '#E6F4F150',
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(projectId, projectName, achievements, endDate) {
  return {
    projectId,
    projectName,
    achievements,
    endDate,
  };
}

const rows = [
  createData(101, '올바른 텐트', '150%', '2022-01-01'),
  createData(102, '올바른 낚시대', '150%', '2022-01-01'),
  createData(103, '키큰 낚시대', '150%', '2022-01-01'),
  createData(104, '키큰 꾸준히 낙시대', '150%', '2022-01-01'),
  createData(105, '꾸준히 낙시대', '150%', '2022-01-01'),
  createData(106, '불사 낙시대', '150%', '2022-01-01'),
];

export default function ProjectProducer(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    borderRadius: '0px',
    boxShadow: 'none',
  }));

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
            제작자 정보
          </Typography>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Grid
              item
              xs={4}
              md={5.5}
              style={{
                marginBottom: '1%',
                borderBottom: '1px solid #808080',
                paddingLeft: '0',
              }}
            >
              <Item>
                <Typography
                  id="modal-modal-title"
                  variant="label"
                  component="label"
                  fontSize={14}
                >
                  제작자 정보 :
                </Typography>
                <Typography
                  id="modal-modal-title"
                  variant="label"
                  component="label"
                  marginLeft={1.5}
                  fontSize={14}
                >
                  김진호
                </Typography>
              </Item>
            </Grid>
            <Grid
              item
              xs={4}
              md={5.5}
              style={{
                marginBottom: '1%',
                borderBottom: '1px solid #808080',
                paddingLeft: '0',
                marginLeft: '3%',
              }}
              fontSize={14}
            >
              <Item>
                <Typography
                  id="modal-modal-title"
                  variant="label"
                  component="label"
                  fontSize={14}
                >
                  연락처 :
                </Typography>
                <Typography
                  id="modal-modal-title"
                  variant="label"
                  component="label"
                  marginLeft={1.5}
                  fontSize={14}
                >
                  010-2323-2322
                </Typography>
              </Item>
            </Grid>
            <Grid
              item
              xs={4}
              md={5.5}
              style={{
                marginBottom: '1%',
                borderBottom: '1px solid #808080',
                paddingLeft: '0',
              }}
            >
              <Item>
                <Typography
                  id="modal-modal-title"
                  variant="label"
                  component="label"
                  fontSize={14}
                >
                  사업자 정보 :
                </Typography>
                <Typography
                  id="modal-modal-title"
                  variant="label"
                  component="label"
                  marginLeft={1.5}
                  fontSize={14}
                >
                  032-292-232152
                </Typography>
              </Item>
            </Grid>
            <Grid
              item
              xs={4}
              md={5.5}
              style={{
                marginBottom: '1%',
                borderBottom: '1px solid #808080',
                paddingLeft: '0',
                marginLeft: '3%',
              }}
              fontSize={14}
            >
              <Item>
                <Typography
                  id="modal-modal-title"
                  variant="label"
                  component="label"
                  fontSize={14}
                >
                  소재지 :
                </Typography>
                <Typography
                  id="modal-modal-title"
                  variant="label"
                  component="label"
                  marginLeft={1.5}
                  fontSize={12}
                >
                  경기도 성남시 수정구 대왕판교로
                </Typography>
              </Item>
            </Grid>
            <Grid
              item
              xs={4}
              md={5.5}
              style={{
                marginBottom: '1%',
                borderBottom: '1px solid #808080',
                paddingLeft: '0',
              }}
            >
              <Item>
                <Typography
                  id="modal-modal-title"
                  variant="label"
                  component="label"
                  fontSize={14}
                >
                  프로젝트 평균 달성률 :
                </Typography>
                <Typography
                  id="modal-modal-title"
                  variant="label"
                  component="label"
                  marginLeft={1.5}
                  fontSize={14}
                >
                  1000%
                </Typography>
              </Item>
            </Grid>
            <Grid
              item
              xs={4}
              md={5.5}
              style={{
                marginBottom: '1%',
                borderBottom: '1px solid #808080',
                paddingLeft: '0',
                marginLeft: '3%',
              }}
              fontSize={14}
            >
              <Item>
                <Typography
                  id="modal-modal-title"
                  variant="label"
                  component="label"
                  fontSize={14}
                >
                  정산 계좌 :
                </Typography>
                <Typography
                  id="modal-modal-title"
                  variant="label"
                  component="label"
                  marginLeft={1.5}
                  fontSize={14}
                >
                  농협 302-5898-5592
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} textAlign="center">
              <TableContainer
                component={Paper}
                sx={{ height: '95%' }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <Table
                  sx={{ minWidth: 500, height: '0.8' }}
                  style={{ flex: 1 }}
                  aria-label="customized table"
                >
                  <TableHead>
                    <TableRow>
                      <StyledTableCell align="center">번호</StyledTableCell>
                      <StyledTableCell align="center">
                        프로젝트 명
                      </StyledTableCell>
                      <StyledTableCell align="center">달성률</StyledTableCell>
                      <StyledTableCell align="center">종료일</StyledTableCell>
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
                          {row.projectId}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {row.projectName}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {row.achievements}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {row.endDate}
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Grid item xs={3} textAlign="center">
              <Button variant="contained" onClick={handleClose}>
                확인
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
