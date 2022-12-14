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
import Stack from "@mui/material/Stack";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import {
  SET_CALCULATE_APPLICATION,
  SET_FILE,
  INIT_FILE,
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
    formData.append("title", results.title);
    formData.append("content", results.content);
    formData.append("preCalApplicationFile", results.preCalApplicationFile);

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
        {calculateInfo ? (
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
                1??? ?????? ????????? ?????????????????????.
              </Box>
              <Box
                sx={{ color: "#757575", margin: "20px 0", lineHeight: "20px" }}
              >
                {calculateInfo.projectName}
                <br />
                1??? ?????? ????????? ?????????????????????.
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
        ) : (
          ""
        )}
      </Modal>
    </React.Fragment>
  );
}

export default function CalculateReqModal1(props) {
  const dispatch = useDispatch();
  const results = useSelector((state) => state.calculateProjectReducer);
  const calculateInfo = results.calculateInfo;

  const { projectId } = useParams();

  const { buttonText } = props;

  const [open, setOpen] = React.useState(false);
  const [files, setFiles] = React.useState([]);
  const handleOpen = () => {
    setOpen(true);

    const applicationInfo = {
      projectId: projectId,
      calculateDivision: "1?????????",
      calculateStatus: "1???????????????",
      totalCalAmount: calculateInfo.actualAmount,
      preCalAmount: calculateInfo.preAmount,
      balance: calculateInfo.actualAmount - calculateInfo.preAmount,
    };

    dispatch({ type: SET_CALCULATE_APPLICATION, payload: applicationInfo });
  };
  const handleClose = () => {
    setOpen(false);
    deleteFile();
  };

  const inputFiles = (e) => {
    let fileSize = 0;
    for (let i = 0; i < e.target.files.length; i++) {
      fileSize += e.target.files[i].size;
    }

    const maxSize = 10 * 1024 * 1024;
    let fileList = [];
    if (fileSize > maxSize) {
      alert("???????????? ???????????? 10MB ????????? ?????? ???????????????.");
      e.target.files = "";
      return false;
    } else {
      for (let i = 0; i < e.target.files.length; i++) {
        fileList.push(e.target.files[i]);
      }
      setFiles(fileList);
    }

    dispatch({ type: SET_FILE, payload: e.target.files[0] });
  };

  const deleteFile = () => {
    setFiles(null);
    dispatch({ type: INIT_FILE });
  };

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
            width: 500,
            height: 600,
          }}
        >
          {calculateInfo ? (
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
                  1??? ?????? ??????
                </header>
                <Table sx={{ margin: "10px 0" }}>
                  <TableBody>
                    <TableRow>
                      <TableCell
                        component="th"
                        scope="row"
                        align="center"
                        sx={{ fontWeight: "bold", width: "50%" }}
                      >
                        ??? ?????? ??????
                      </TableCell>
                      <TableCell align="center">
                        {new Intl.NumberFormat("ko-KR").format(
                          calculateInfo.actualAmount
                        )}
                      </TableCell>
                      <TableCell
                        component="th"
                        scope="row"
                        align="center"
                        sx={{ fontWeight: "bold", width: "50%" }}
                      >
                        1??? ?????? ??????
                      </TableCell>
                      <TableCell align="center">
                        {new Intl.NumberFormat("ko-KR").format(
                          calculateInfo.preAmount
                        )}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>

                <Button
                  variant="contained"
                  component="label"
                  sx={{
                    width: "100%",
                    height: "100px",
                    backgroundColor: "#D9D9D9",
                    fontSize: 24,
                  }}
                >
                  ?????? ??????
                  <input
                    hidden
                    accept="image/*"
                    multiple
                    type="file"
                    onChange={inputFiles}
                  />
                </Button>
                <Box
                  sx={{
                    textAlign: "center",
                    color: "#D9D9D9",
                    width: "100%",
                    height: "20px",
                    padding: "2%",
                    marginBottom: "20px",
                  }}
                >
                  ????????? ????????? ????????? ??? [??????] ????????? ??????????????????.
                </Box>
                <Box sx={{ height: "250px", overflowY: "scroll" }}>
                  {files
                    ? files.map((file, id) => (
                        <Box key={id} sx={{ margin: "10px" }}>
                          {console.log(file, id, files[id])}
                          <Stack
                            direction="row"
                            alignItems="center"
                            spacing={1}
                            sx={{
                              padding: "20px 10px",
                              backgroundColor: "#F8F8F8",
                            }}
                          >
                            <AttachFileIcon sx={{ color: "#00AEEF" }} />
                            <div>{file.name}</div>

                            <IconButton
                              component="label"
                              onClick={() => deleteFile()}
                            >
                              <CloseIcon color="primary" />
                            </IconButton>
                          </Stack>
                        </Box>
                      ))
                    : ""}

                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      padding: "30px",
                    }}
                  >
                    <ChildModal close={handleClose} />

                    <Button
                      variant="outlined"
                      component="label"
                      onClick={handleClose}
                    >
                      ??????
                    </Button>
                  </Stack>
                </Box>
              </Box>{" "}
            </>
          ) : (
            ""
          )}
        </Box>
      </Modal>
    </>
  );
}
