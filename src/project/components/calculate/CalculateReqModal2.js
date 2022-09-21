import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import styled from "styled-components";
import Divider from "@mui/material/Divider";

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

function ChildModal({ close }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    close();
  };

  return (
    <React.Fragment>
      <Button
        variant="contained"
        color="primary"
        sx={{ fontWeight: "bold" }}
        onClick={handleOpen}
      >
        확인
      </Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 500, height: 300 }}>
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
            <Box
              sx={{
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              2차 정산 신청이 완료되었습니다.
            </Box>
            <Box
              sx={{ color: "#757575", margin: "20px 0", lineHeight: "20px" }}
            >
              LEISURETHAT SAMPLE PROJECT 01
              <br />
              2022-07-29 leisurethat01
              <br />
              2차 정산 신청이 완료되었습니다.
            </Box>
            <Box sx={{ color: "#00AEEF", margin: "10px 0" }}>
              2022년 7월 29일, 금요일 (GMT+9) 대한민국 시간
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              variant="contained"
              color="primary"
              sx={{ fontWeight: "bold" }}
              onClick={handleClose}
            >
              확인
            </Button>
          </Box>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function CalculateReqModal1(props) {
  const { buttonText, currentState, round } = props;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const ProjectLabel = styled.div`
    font-size: 24px;
    font-weight: bolder;
  `;

  function createData(completionDel, shipping, waitingDel, totalDel) {
    return {
      completionDel,
      shipping,
      waitingDel,
      totalDel,
    };
  }

  const data = createData(100, 0, 0, 100);

  return (
    <>
      <Button variant="outlined" onClick={handleOpen}>
        {buttonText}
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
            width: 1000,
            height: 600,
          }}
        >
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
              style={{ color: "#00AEEF", fontSize: 36, fontWeight: "bold" }}
            >
              2차 정산 신청
            </header>

            <Divider
              style={{
                boxShadow: "0px 2px 4px gray",
                margin: "15px 0px 25px 0px",
              }}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                height: "350px",
                overflowY: "scroll",
              }}
            >
              <Box sx={{ width: "90%" }}>
                <Box sx={{ margin: "10px 0" }}>
                  <ProjectLabel>2차 정산 정책</ProjectLabel>
                  <Box sx={{ padding: "1% 0" }}>
                    제작자는 다음과 같은 상황이 모두 만족하는 경우 2차 정산
                    가능합니다.
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: "rgb(217,217,217, 0.3)", //#d9d9d9
                      boxShadow: "0px 2px 4px gray",
                      padding: "2% 1%",
                    }}
                  >
                    <Box sx={{ fontSize: "16", fontWeight: "bold" }}>
                      1. 프로젝트 리워드 배송 완료 100%
                    </Box>
                  </Box>
                </Box>
                <br />
                <Box sx={{ margin: "10px 0" }}>
                  <ProjectLabel style={{ padding: "1% 0" }}>
                    정산 진행 절차
                  </ProjectLabel>

                  <Box
                    sx={{
                      backgroundColor: "rgb(217,217,217, 0.3)", //#d9d9d9
                      boxShadow: "0px 2px 4px gray",
                      padding: "2% 1%",
                    }}
                  >
                    <Box
                      sx={{
                        fontSize: "16",
                        fontWeight: "bold",
                        lineHeight: "30px",
                      }}
                    >
                      1. 1차 정산 지급 이후 리워드를 배송합니다.
                      <br />
                      2. 리워드 배송 현황이 100% 배송완료 인 경우 2차 정산
                      신청합니다.
                      <br />
                      3. 래저댓은 2차 정산 승인 여부를 제작자에게 알림합니다.{" "}
                      <br />
                      4. 승인일 기준 7일 이내에 정산이 지급됩니다. <br />
                    </Box>
                  </Box>
                </Box>
                <br />

                <Box sx={{ margin: "10px 0" }}>
                  <ProjectLabel>배송 현황</ProjectLabel>
                  <Box>
                    <Table>
                      <TableBody>
                        <TableRow>
                          <TableCell
                            component="th"
                            scope="row"
                            align="center"
                            sx={{ fontWeight: "bold", width: "50%" }}
                          >
                            배송 완료
                          </TableCell>
                          <TableCell align="center">
                            {data.completionDel}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell
                            component="th"
                            scope="row"
                            align="center"
                            sx={{ fontWeight: "bold", width: "50%" }}
                          >
                            배송 중
                          </TableCell>
                          <TableCell align="center">{data.shipping}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell
                            component="th"
                            scope="row"
                            align="center"
                            sx={{ fontWeight: "bold", width: "50%" }}
                          >
                            배송 대기
                          </TableCell>
                          <TableCell align="center">
                            {data.waitingDel}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell
                            component="th"
                            scope="row"
                            align="center"
                            sx={{
                              fontWeight: "bold",
                              fontSize: "16px",
                              width: "50%",
                              color: "#00AEEF",
                            }}
                          >
                            총 배송 건수
                          </TableCell>
                          <TableCell align="center">{data.totalDel}</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </Box>
                </Box>
                <br />
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  <ChildModal close={handleClose} />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
