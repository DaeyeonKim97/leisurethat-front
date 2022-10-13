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
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { callGetCalculateApplicationList } from "../../apis/CalculateAPICalls";

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

export default function CalculateRecordForm({ projectId }) {
  const dispatch = useDispatch();
  const results = useSelector((state) => state.calculateReducer);
  const applicationList = results.calculateApplicationList;

  useEffect(() => {
    dispatch(callGetCalculateApplicationList({ projectId }));
  }, []);

  return (
    <>
      <div style={{ height: "500px" }}>
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
            height: "calc(100% - 100px)",
          }}
        >
          <TableContainer
            component={Paper}
            sx={{ height: "400px" }}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Table
              sx={{ minWidth: 700, height: "400px" }}
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
                {applicationList &&
                  applicationList.map((application, id) => (
                    <StyledTableRow key={id} hover>
                      <StyledTableCell
                        component="th"
                        scope="row"
                        sx={{ width: 100 }}
                        align="center"
                      >
                        {application.calculateId}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {application.projectName}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {application.calculateState}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {application.calculateRound}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {application.calculateStatus}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {application.calculateRegDate}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        <CalculateDetailRecordModal
                          calculateRound={application.calculateRound}
                          calculateId={application.calculateId}
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
