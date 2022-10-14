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

import SponserInfoModal from "./SponserInfoModal";
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

export default function CancleTable() {
  const results = useSelector((state) => state.orderReducer);
  const cancleList = results.orderCancleList;

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
                주문 번호
              </StyledTableCell>
              <StyledTableCell align="center">후원자 정보</StyledTableCell>
              <StyledTableCell align="center">결제 상태</StyledTableCell>
              <StyledTableCell align="center">펀딩 금액</StyledTableCell>
              <StyledTableCell align="center">리워드</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cancleList &&
              cancleList.map((cancle, id) => (
                <StyledTableRow key={id} hover>
                  <StyledTableCell
                    component="th"
                    align="center"
                    scope="row"
                    sx={{ width: 100 }}
                  >
                    {cancle.orderId}
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
                      {cancle.sponserName}
                      <SponserInfoModal orderId={cancle.orderId}>
                        <IconButton
                          color="primary"
                          aria-label="add to shopping cart"
                        >
                          <PageviewIcon />
                        </IconButton>
                      </SponserInfoModal>
                    </div>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {cancle.orderStatus}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {new Intl.NumberFormat("ko-KR").format(cancle.paymentPrice)}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {cancle.rewardName}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
