import * as React from "react";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import CalculateDetailRecordModal from "./CalculateDetailRecordModal";

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
  calId,
  calAmount,
  makerName,
  projectName,
  calculateRound,
  calculateState,
  created,
  accept
) {
  return {
    calId,
    calAmount,
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
    2,
    "50,000,000원",
    "이상학",
    "프로젝트 명",
    "1차",
    "승인 대기",
    "2022-01-01",
    "Y"
  ),
  createData(
    1,
    "50,000,000원",
    "이상학",
    "프로젝트 명",
    "1차",
    "승인 반려",
    "2021-12-19",
    "Y"
  ),
];

export default function CalculateRecordForm() {
  return (
    <>
      <div style={{ height: "80vh" }}>
        <header style={{ color: "#00AEEF", fontSize: 36, fontWeight: "bold" }}>
          정산 신청 내역
        </header>
        <Divider
          style={{
            boxShadow: "0px 2px 4px gray",
            margin: "15px 0px 25px 0px",
          }}
        />
        <div
          className="whatsthis"
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            height: "calc(100% - 320px)",
          }}
        >
          <TableContainer
            component={Paper}
            sx={{ height: "95%" }}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Table
              sx={{ minWidth: 700, height: "0.8" }}
              style={{ flex: 1 }}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center" sx={{ width: 130 }}>
                    정산 신청 번호
                  </StyledTableCell>
                  <StyledTableCell align="center">프로젝트 명</StyledTableCell>
                  <StyledTableCell align="center">정산 회차</StyledTableCell>
                  <StyledTableCell align="center">정산 금액</StyledTableCell>
                  <StyledTableCell align="center">정산 현황</StyledTableCell>
                  <StyledTableCell align="center">정산 신청일</StyledTableCell>
                  <StyledTableCell align="center">상세 내용</StyledTableCell>
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
                      {row.calId}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.projectName}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.calculateState}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.calculateRound}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.calculateState}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.created}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <CalculateDetailRecordModal
                        calculateRound={row.calculateRound}
                      />
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          {/* <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <CalculatePagination />
          </div> */}
        </div>
      </div>
    </>
  );
}
