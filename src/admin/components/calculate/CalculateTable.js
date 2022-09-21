import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography, Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import PageviewIcon from "@mui/icons-material/Pageview";

import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CalAcceptModal from "./CalAcceptModal";
import CalRefuseModal from "./CalRefuseModal";
import MakerInfoModal from "../commons/MakerInfoModal/MakerInfoModal";
import CalculatePagination from "./CalculatePagination";
import CalculateModal from "./CalculateModal";

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

function createData(
  projectId,
  makerId,
  makerName,
  projectName,
  calculateRound,
  calculateState,
  created,
  accept
) {
  return {
    projectId,
    makerId,
    makerName,
    projectName,
    calculateRound,
    calculateState,
    created,
    accept,
  };
}

const rows = [
  createData(
    1,
    1,
    "이상학",
    "프로젝트 명",
    "1차",
    "승인 대기",
    "2022-01-01",
    "Y"
  ),
  createData(
    2,
    2,
    "도연재",
    "프로젝트 명",
    "1차",
    "승인 완료",
    "2022-01-01",
    "Y"
  ),
  createData(
    3,
    3,
    "부시연",
    "프로젝트 명",
    "1차",
    "정산 완료",
    "2022-01-01",
    "Y"
  ),
  createData(
    4,
    4,
    "최은진",
    "프로젝트 명",
    "1차",
    "정산 반려",
    "2022-01-01",
    "Y"
  ),
  createData(
    5,
    5,
    "최윤서",
    "프로젝트 명",
    "2차",
    "승인 대기",
    "2022-01-01",
    "Y"
  ),
  createData(
    6,
    6,
    "문지현",
    "프로젝트 명",
    "2차",
    "승인 완료",
    "2022-01-01",
    "Y"
  ),
  createData(
    5,
    5,
    "최윤서",
    "프로젝트 명",
    "2차",
    "정산 완료",
    "2022-01-01",
    "Y"
  ),
  createData(
    6,
    6,
    "문지현",
    "프로젝트 명",
    "2차",
    "정산 반려",
    "2022-01-01",
    "Y"
  ),
];

export default function CalculateTable() {
  return (
    <>
      <TableContainer
        component={Paper}
        sx={{ height: "95%" }}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
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
          sx={{ minWidth: 700, height: "0.8" }}
          style={{ flex: 1 }}
          aria-label="customized table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell align="center" sx={{ width: 130 }}>
                프로젝트 번호
              </StyledTableCell>
              <StyledTableCell align="center">제작자 ID</StyledTableCell>
              <StyledTableCell align="center">제작자 명</StyledTableCell>
              <StyledTableCell align="center">프로젝트 이름</StyledTableCell>
              <StyledTableCell align="center">정산 회차</StyledTableCell>
              <StyledTableCell align="center">정산 현황</StyledTableCell>
              <StyledTableCell align="center">정산 신청일</StyledTableCell>
              <StyledTableCell align="center">신청 내역</StyledTableCell>
              <StyledTableCell align="center">승인/반려</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, id) => (
              <StyledTableRow key={id} hover>
                <StyledTableCell
                  component="th"
                  scope="row"
                  sx={{ width: 100 }}
                  align="center"
                >
                  {row.projectId}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.projectName}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {row.makerName}
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
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {row.projectName}
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
                  {row.calculateRound}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.calculateState}
                </StyledTableCell>
                <StyledTableCell align="center">{row.created}</StyledTableCell>
                <StyledTableCell align="center">
                  <CalculateModal buttonText="신청 내역" />
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.calculateState === "정산 반려" ? (
                    <CalculateModal
                      buttonText="반려 사유"
                      currentState={row.calculateState}
                    />
                  ) : (
                    ""
                  )}

                  {row.calculateState === "승인 대기" ? (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <CalAcceptModal>
                        <IconButton
                          color="primary"
                          aria-label="add to shopping cart"
                        >
                          <CheckCircleOutlineIcon />
                        </IconButton>
                      </CalAcceptModal>
                      <CalRefuseModal>
                        <IconButton
                          color="primary"
                          aria-label="add to shopping cart"
                        >
                          <HighlightOffIcon color="error" />
                        </IconButton>
                      </CalRefuseModal>
                    </div>
                  ) : (
                    ""
                  )}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <CalculatePagination />
      </div>
    </>
  );
}
