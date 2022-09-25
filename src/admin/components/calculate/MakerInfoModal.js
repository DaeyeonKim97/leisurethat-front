import * as React from "react";
import {
  Button,
  Divider,
  Modal,
  Table,
  TableBody,
  TableRow,
  Box,
  Paper,
  TableHead,
  Typography,
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import { width } from "@mui/system";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#6297BA",
    color: theme.palette.common.white,
    fontWeight: "bold",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(even)": {
    backgroundColor: "#E6F4F150",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 512,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
};

export default function MakerInfoModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div onClick={handleOpen}>{props.children}</div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box height={600} sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ fontWeight: "bold", fontSize: 25 }}
          >
            제작자 정보
          </Typography>
          <Divider style={{ marginBottom: "20px" }} />

          <Box>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell
                    component="th"
                    scope="row"
                    align="center"
                    sx={{ fontWeight: "bold", width: "25%", fontSize: "14px" }}
                  >
                    제작자 명
                  </TableCell>
                  <TableCell align="center" sx={{ fontSize: "14px" }}>
                    이상학
                  </TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    align="center"
                    sx={{ fontWeight: "bold", width: "25%", fontSize: "14px" }}
                  >
                    연락처
                  </TableCell>
                  <TableCell align="center" sx={{ fontSize: "14px" }}>
                    010-0000-0000
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    component="th"
                    scope="row"
                    align="center"
                    sx={{ fontWeight: "bold", width: "25%", fontSize: "14px" }}
                  >
                    사업자 번호
                  </TableCell>
                  <TableCell align="center" sx={{ fontSize: "14px" }}>
                    123456789
                  </TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    align="center"
                    sx={{ fontWeight: "bold", width: "25%", fontSize: "14px" }}
                  >
                    정산 계좌
                  </TableCell>
                  <TableCell align="center" sx={{ fontSize: "14px" }}>
                    농협 302-0000-0000
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
          <Box
            sx={{ display: "flex", justifyContent: "flex-end", padding: "2%" }}
          >
            <Typography sx={{ fontWeight: "bold" }}>총 2건</Typography>
          </Box>

          <Paper>
            <Table
              sx={{ minWidth: "100%", height: "0.8" }}
              style={{ flex: 1 }}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">번호</StyledTableCell>
                  <StyledTableCell align="center">프로젝트 명</StyledTableCell>
                  <StyledTableCell align="center">달성률</StyledTableCell>
                  <StyledTableCell align="center">종료일</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <StyledTableRow hover>
                  <StyledTableCell
                    component="th"
                    scope="row"
                    sx={{ width: 100 }}
                    align="center"
                  >
                    h
                  </StyledTableCell>
                  <StyledTableCell align="center">h</StyledTableCell>
                  <StyledTableCell
                    component="th"
                    scope="row"
                    sx={{ width: 100 }}
                    align="center"
                  >
                    h
                  </StyledTableCell>
                  <StyledTableCell align="center">h</StyledTableCell>
                </StyledTableRow>

                <StyledTableRow hover>
                  <StyledTableCell
                    component="th"
                    scope="row"
                    sx={{ width: 100 }}
                    align="center"
                  >
                    h
                  </StyledTableCell>
                  <StyledTableCell align="center">h</StyledTableCell>
                  <StyledTableCell
                    component="th"
                    scope="row"
                    sx={{ width: 100 }}
                    align="center"
                  >
                    h
                  </StyledTableCell>
                  <StyledTableCell align="center">h</StyledTableCell>
                </StyledTableRow>
                <StyledTableRow hover>
                  <StyledTableCell
                    component="th"
                    scope="row"
                    sx={{ width: 100 }}
                    align="center"
                  >
                    h
                  </StyledTableCell>
                  <StyledTableCell align="center">h</StyledTableCell>
                  <StyledTableCell
                    component="th"
                    scope="row"
                    sx={{ width: 100 }}
                    align="center"
                  >
                    h
                  </StyledTableCell>
                  <StyledTableCell align="center">h</StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </Paper>
          <Box
            sx={{ display: "flex", justifyContent: "center", padding: "5%" }}
          >
            <Button variant="contained" color="primary" onClick={handleClose}>
              확인
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
