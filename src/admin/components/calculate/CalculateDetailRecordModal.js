import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Stack from "@mui/material/Stack";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import DownloadIcon from "@mui/icons-material/Download";

import {
  callGetCalculateDetail,
  callGetCalculateProjectInfo,
} from "../../apis/CalculateAPICalls";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function CalculateDetailRecordModal(props) {
  const dispatch = useDispatch();
  const results = useSelector((state) => state.calculateReducer);
  const detailInfo = results.calculateDetail;
  const { calculateRound, calculateId } = props;

  const [open, setOpen] = React.useState(false);
  const handleOpen = (calculateId) => {
    setOpen(true);
    dispatch(callGetCalculateDetail({ calculateId }));
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        variant="outlined"
        onClick={() => {
          handleOpen(calculateId);
        }}
      >
        상세 조회
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box
          sx={{
            ...style,
            width: 500,
            height: 600,
          }}
        >
          {detailInfo ? (
            <>
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                  onClick={handleClose}
                >
                  <CloseIcon color="primary" />
                </IconButton>
              </Box>
              <Box>
                <header
                  style={{ color: "#00AEEF", fontSize: 24, fontWeight: "bold" }}
                >
                  {calculateRound} 정산 신청
                </header>
                <Table sx={{ margin: "10px 0" }}>
                  <TableBody>
                    <TableRow>
                      <TableCell
                        component="th"
                        scope="row"
                        align="center"
                        sx={{
                          fontSize: "12px",
                          fontWeight: "bold",
                          width: "25%",
                          padding: "5px",
                        }}
                      >
                        프로젝트 명 :
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ fontSize: 12, width: "25%", padding: "5px" }}
                      >
                        {detailInfo.projectName}
                      </TableCell>
                      <TableCell
                        component="th"
                        scope="row"
                        align="center"
                        sx={{
                          fontSize: "12px",
                          fontWeight: "bold",
                          width: "25%",
                          padding: "5px",
                        }}
                      >
                        총 주문건
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ fontSize: 12, width: "25%", padding: "5px" }}
                      >
                        {detailInfo.totalDeliveryCount}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        component="th"
                        scope="row"
                        align="center"
                        sx={{
                          fontSize: "12px",
                          fontWeight: "bold",
                          width: "25%",
                          padding: "5px",
                        }}
                      >
                        제작자 명 :
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ fontSize: 12, width: "25%", padding: "5px" }}
                      >
                        {detailInfo.makerUserName}
                      </TableCell>
                      <TableCell
                        component="th"
                        scope="row"
                        align="center"
                        sx={{
                          fontSize: "12px",
                          fontWeight: "bold",
                          width: "25%",
                          padding: "5px",
                        }}
                      >
                        배송 완료 건 :
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ fontSize: 12, width: "25%", padding: "5px" }}
                      >
                        {detailInfo.deliveryCompleteCount}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        component="th"
                        scope="row"
                        align="center"
                        sx={{
                          fontSize: "12px",
                          fontWeight: "bold",
                          width: "25%",
                          padding: "5px",
                        }}
                      >
                        프로젝트 번호 :
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ fontSize: 12, width: "25%", padding: "5px" }}
                      >
                        {detailInfo.projectId}
                      </TableCell>
                      <TableCell
                        component="th"
                        scope="row"
                        align="center"
                        sx={{
                          fontSize: "12px",
                          fontWeight: "bold",
                          width: "25%",
                          padding: "5px",
                        }}
                      >
                        미 배송건 :
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ fontSize: 12, width: "25%", padding: "5px" }}
                      >
                        {detailInfo.deliveryOnCallCount}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        component="th"
                        scope="row"
                        align="center"
                        sx={{
                          fontSize: "12px",
                          fontWeight: "bold",
                          width: "25%",
                          padding: "10px",
                        }}
                      >
                        총 모집 금액 :
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ fontSize: 12, width: "25%", padding: "5px" }}
                      >
                        {detailInfo.totalAmount}
                      </TableCell>
                      <TableCell
                        component="th"
                        scope="row"
                        align="center"
                        sx={{
                          fontSize: "12px",
                          fontWeight: "bold",
                          width: "25%",
                          padding: "10px",
                        }}
                      >
                        {calculateRound} 신청 금액
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ fontSize: 12, width: "25%", padding: "5px" }}
                      >
                        {detailInfo.calculateAmount}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>

                <Box sx={{ height: "250px", overflowY: "scroll" }}>
                  {detailInfo.atcDownload ? (
                    <Box sx={{ margin: "10px" }}>
                      <Stack
                        direction="row"
                        alignItems="center"
                        spacing={3}
                        sx={{
                          padding: "10px 5px",
                          backgroundColor: "#F8F8F8",
                        }}
                      >
                        <AttachFileIcon sx={{ color: "#00AEEF" }} />
                        <div>{detailInfo.atcDownload}</div>

                        <IconButton component="label">
                          <DownloadIcon color="primary" />
                        </IconButton>
                      </Stack>
                    </Box>
                  ) : (
                    ""
                  )}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "20px",
                  }}
                >
                  <Button
                    variant="contained"
                    component="label"
                    onClick={handleClose}
                  >
                    확인
                  </Button>
                </Box>
              </Box>
            </>
          ) : (
            ""
          )}
        </Box>
      </Modal>
    </>
  );
}
