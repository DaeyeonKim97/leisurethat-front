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

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import {
  SET_CALCULATE_APPLICATION,
  SET_POST_SUCCESS,
} from "../../../modules/calculate/CalculateApplicationModule";

import { callCalculateApplicationRegistAPI } from "../../apis/CalculateAPICalls";

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
  const results = useSelector((state) => state.calculateApplicationReducer);
  const results2 = useSelector((state) => state.calculateProjectReducer);
  const calculateInfo = results2.calculateInfo;
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    const formData = new FormData();

    formData.append("projectId", results.projectId);
    formData.append("calculateStatus", results.calculateStatus);
    formData.append("calculateDivision", results.calculateDivision);
    formData.append("totalCalAmount", results.totalCalAmount);
    formData.append("preCalAmount", results.preCalAmount);
    formData.append("balance", results.balance);
    formData.append("postCalAmount", results.postCalAmount);
    formData.append("title", results.title);
    formData.append("content", results.content);

    dispatch(callCalculateApplicationRegistAPI(formData));

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
        ??????
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
              2??? ?????? ????????? ?????????????????????.
            </Box>
            <Box
              sx={{ color: "#757575", margin: "20px 0", lineHeight: "20px" }}
            >
              LEISURETHAT SAMPLE PROJECT 01
              <br />
              2??? ?????? ????????? ?????????????????????.
            </Box>
            <Box sx={{ color: "#00AEEF", margin: "10px 0" }}>
              {new Date().toString()}
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              variant="contained"
              color="primary"
              sx={{ fontWeight: "bold" }}
              onClick={handleClose}
            >
              ??????
            </Button>
          </Box>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function CalculateReqModal1(props) {
  const dispatch = useDispatch();
  const results = useSelector((state) => state.calculateProjectReducer);
  const calculateInfo = results.calculateInfo;

  const { projectId } = useParams();

  const { buttonText, currentState, round } = props;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    const applicationInfo = {
      projectId: projectId,
      calculateDivision: "2?????????",
      calculateStatus: "2???????????????",
      totalCalAmount: calculateInfo.actualAmount,
      preCalAmount: calculateInfo.preAmount,
      balance: 0,
      postCalAmount: calculateInfo.postAmount,
    };

    dispatch({ type: SET_CALCULATE_APPLICATION, payload: applicationInfo });
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
              2??? ?????? ??????
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
                  <ProjectLabel>2??? ?????? ??????</ProjectLabel>
                  <Box sx={{ padding: "1% 0" }}>
                    ???????????? ????????? ?????? ????????? ?????? ???????????? ?????? 2??? ??????
                    ???????????????.
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: "rgb(217,217,217, 0.3)", //#d9d9d9
                      boxShadow: "0px 2px 4px gray",
                      padding: "2% 1%",
                    }}
                  >
                    <Box sx={{ fontSize: "16", fontWeight: "bold" }}>
                      1. ???????????? ????????? ?????? ?????? 100%
                    </Box>
                  </Box>
                </Box>
                <br />
                <Box sx={{ margin: "10px 0" }}>
                  <ProjectLabel style={{ padding: "1% 0" }}>
                    ?????? ?????? ??????
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
                      1. 1??? ?????? ?????? ?????? ???????????? ???????????????.
                      <br />
                      2. ????????? ?????? ????????? 100% ???????????? ??? ?????? 2??? ??????
                      ???????????????.
                      <br />
                      3. ???????????? 2??? ?????? ?????? ????????? ??????????????? ???????????????.{" "}
                      <br />
                      4. ????????? ?????? 7??? ????????? ????????? ???????????????. <br />
                    </Box>
                  </Box>
                </Box>
                <br />

                <Box sx={{ margin: "10px 0" }}>
                  <ProjectLabel>?????? ??????</ProjectLabel>
                  {calculateInfo ? (
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
                              ?????? ??????
                            </TableCell>
                            <TableCell align="center">
                              {calculateInfo.deliveryCompleteCount}
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell
                              component="th"
                              scope="row"
                              align="center"
                              sx={{ fontWeight: "bold", width: "50%" }}
                            >
                              ?????? ???
                            </TableCell>
                            <TableCell align="center">
                              {calculateInfo.deliveryOngoingCount}
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell
                              component="th"
                              scope="row"
                              align="center"
                              sx={{ fontWeight: "bold", width: "50%" }}
                            >
                              ?????? ??????
                            </TableCell>
                            <TableCell align="center">
                              {calculateInfo.deliveryOnCallCount}
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
                              ??? ?????? ??????
                            </TableCell>
                            <TableCell align="center">
                              {calculateInfo.totalDeliveryCount}
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </Box>
                  ) : (
                    ""
                  )}
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
