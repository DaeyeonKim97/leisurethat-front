import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/box";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CalculateModal from "./CalculateModal";
import CalculateReqModal1 from "./CalculateReqModal1";
import CalculateReqModal2 from "./CalculateReqModal2";
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

function createData(
  round,
  currentState,
  calculateAmount,
  created,
  giveDate,
  history
) {
  return {
    round,
    currentState,
    calculateAmount,
    created,
    giveDate,
    history,
  };
}

const rows = [
  createData("1차", "정산 신청", "1,000,000", "2022-01-01", "-"),
  createData("1차", "정산 반려", "1,000,000", "2022-01-01", "-"),
  createData("1차", "정산 완료", "1,000,000", "2022-01-01", "2022-01-10"),
  createData("1차", "정산 승인", "1,000,000", "2022-01-01", "-"),
  createData("2차", "정산 신청", "1,000,000", "2022-01-01", "-"),
  createData("2차", "정산 반려", "1,000,000", "2022-01-01", "-"),
  createData("2차", "정산 완료", "1,000,000", "2022-01-01", "2022-01-10"),
  createData("2차", "정산 승인", "1,000,000", "2022-01-01", "-"),
];

export default function CalculateTable() {
  const results = useSelector((state) => state.calculateProjectReducer);
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
        <Box
          sx={{ display: "flex", justifyContent: "flex-end", padding: "1%" }}
        >
          <Stack direction="row" alignItems="center" spacing={2}>
            <CalculateReqModal1 buttonText="1차 정산 신청" />
            <CalculateReqModal2 buttonText="2차 정산 신청" />
          </Stack>
        </Box>
        <Table
          sx={{ minWidth: 700, height: "0.8" }}
          style={{ flex: 1 }}
          aria-label="customized table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell align="center" sx={{ width: 130 }}>
                정산 회차
              </StyledTableCell>
              <StyledTableCell align="center">정산 현황</StyledTableCell>
              <StyledTableCell align="center">정산 금액</StyledTableCell>
              <StyledTableCell align="center">정산 신청일</StyledTableCell>
              <StyledTableCell align="center">정산 지급일</StyledTableCell>
              <StyledTableCell align="center">정산 신청 내역</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {calculateList &&
              calculateList.map((row, id) => (
                <StyledTableRow key={id} hover>
                  <StyledTableCell
                    align="center"
                    component="th"
                    scope="row"
                    sx={{ width: 100 }}
                  >
                    {row.calculateRound}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.status !== "정산 반려" ? (
                      `${row.status}`
                    ) : (
                      <CalculateModal
                        buttonText={row.status}
                        round={row.calculateRound}
                        calculateId={row.calculateId}
                      />
                    )}
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
                      {new Intl.NumberFormat("ko-KR").format(row.amount)}
                    </div>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.regDate}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.giveDate ? row.giveDate : "-"}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <CalculateModal
                      buttonText="신청 내역"
                      currentState={row.status}
                      round={row.calculateRound}
                      calculateId={row.calculateId}
                    />
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
        {/* <JudgePagenation /> */}
      </div>
    </>
  );
}
