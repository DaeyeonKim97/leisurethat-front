import * as React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

import {
  SET_CALCULATE_JUDGE,
  SET_JUDGE_SUCCESS,
} from "../../../modules/calculate/CalculateJudgeModule";
import { callCalculateJudgeRegistAPI } from "../../apis/CalculateAPICalls";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 512,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
};

export default function CalAcceptModal(props) {
  const dispatch = useDispatch();
  const results = useSelector((state) => state.calculateJudgeReducer);

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);

    const judge = {
      projectId: props.projectId,
      calculateId: props.calculateId,
      calculateRound: props.calculateRound,
      calculateJudgeStatus: "승인",
    };

    dispatch({ type: SET_CALCULATE_JUDGE, payload: judge });
  };
  const handleClose = () => {
    let formData = new FormData();

    formData.append("projectId", results.projectId);
    formData.append("calculateId", results.calculateId);
    formData.append("projectId", results.projectId);
    formData.append("calculateRound", results.calculateRound);
    formData.append("calculateJudgeStatus", results.calculateJudgeStatus);
    console.log(results);
    dispatch(callCalculateJudgeRegistAPI(formData));
    dispatch({ type: SET_JUDGE_SUCCESS });
    setOpen(false);
  };

  return (
    <div>
      <div onClick={handleOpen}>{props.children}</div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div
            style={{ display: "flex", justifyContent: "right" }}
            onClick={handleClose}
          >
            <IconButton color="primary" aria-label="add to shopping cart">
              <CloseIcon />
            </IconButton>
          </div>
          <Box sx={{ p: "0 15px 10px 20px" }}>
            <Typography id="modal-modal-title" variant="h5">
              승인 처리하시겠습니까?
            </Typography>
            <div style={{ padding: "10px 0px 15px 0px", color: "#757575" }}>
              <p style={{ margin: "7px 0px" }}>LEISURETHAT SAMPLEPROJECT 01 </p>
              <p style={{ margin: "7px 0px" }}>2022-07-29 leisurethat01</p>
              <p style={{ margin: "7px 0px" }}>
                정산 심사를 승인 처리하시겠습니까?
              </p>
            </div>
            <div style={{ display: "flex", justifyContent: "right" }}>
              <Button
                variant="contained"
                style={{ marginRight: "5px" }}
                onClick={handleClose}
              >
                확인
              </Button>
              <Button variant="outlined" onClick={handleClose}>
                취소
              </Button>
            </div>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
