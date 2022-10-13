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
import MakerInfoModal from "./MakerInfoModal";
import ProjectInfoModal from "./ProjectInfoModal";
import CalculateModal from "./CalculateModal";
import { useSelector } from "react-redux";

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

export default function CalculateTable() {
  const results = useSelector((state) => state.calculateReducer);
  const calculateList = results.calculateList;

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
            {calculateList &&
              calculateList.map((calculate, id) => (
                <StyledTableRow key={id} hover>
                  <StyledTableCell
                    component="th"
                    scope="row"
                    sx={{ width: 100 }}
                    align="center"
                  >
                    {calculate.projectId}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {calculate.projectName}
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
                      {calculate.makerName}
                      <MakerInfoModal calculateId={calculate.calculateId}>
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
                      {calculate.projectName}
                      <ProjectInfoModal calculateId={calculate.calculateId}>
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
                    {calculate.calculateRound}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {calculate.calculateStatus}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {calculate.calculateRegDate}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <CalculateModal
                      buttonText="신청 내역"
                      projectId={calculate.projectId}
                      calculateId={calculate.calculateId}
                    />
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {calculate.calculateStatus === "정산 반려" ? (
                      <CalculateModal
                        buttonText="반려 사유"
                        currentState={calculate.calculateStatus}
                        calculateId={calculate.calculateId}
                      />
                    ) : (
                      ""
                    )}

                    {calculate.calculateStatus === "정산 신청" ? (
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <CalAcceptModal
                          calculateId={calculate.calculateId}
                          projectId={calculate.projectId}
                          calculateRound={calculate.calculateRound}
                        >
                          <IconButton
                            color="primary"
                            aria-label="add to shopping cart"
                          >
                            <CheckCircleOutlineIcon />
                          </IconButton>
                        </CalAcceptModal>
                        <CalRefuseModal
                          calculateId={calculate.calculateId}
                          projectId={calculate.projectId}
                          calculateRound={calculate.calculateRound}
                        >
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
    </>
  );
}
