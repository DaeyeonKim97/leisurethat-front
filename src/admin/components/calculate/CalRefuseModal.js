import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import CalculateRejectReasonForm from "./CalculateRejectReasonForm";
import { callGetCalculateDetail } from "../../apis/CalculateAPICalls";
import { useDispatch } from "react-redux";
import { SET_CALCULATE_JUDGE } from "../../../modules/calculate/CalculateJudgeModule";
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

function ChildModal({ modalType, close }) {
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
      <Button variant="contained" onClick={handleOpen}>
        확인
      </Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: "900px", height: "auto" }}>
          <Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
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
              <CalculateRejectReasonForm close={handleClose} />
            </Box>
          </Box>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function CalRefuseModal(props) {
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);

    const judge = {
      projectId: props.projectId,
      calculateId: props.calculateId,
      calculateRound: props.calculateRound,
      calculateJudgeStatus: "반려",
    };

    dispatch({ type: SET_CALCULATE_JUDGE, payload: judge });
    const calculateId = props.calculateId;
    dispatch(callGetCalculateDetail({ calculateId }));
  };
  const handleClose = () => {
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
              반려 처리하시겠습니까?
            </Typography>
            <div style={{ padding: "10px 0px 15px 0px", color: "#757575" }}>
              <p style={{ margin: "7px 0px" }}>LEISURETHAT SAMPLEPROJECT 01 </p>
              <p style={{ margin: "7px 0px" }}>2022-07-29 leisurethat01</p>
              <p style={{ margin: "7px 0px" }}>
                정산 심사를 반려 처리하시겠습니까
              </p>
              <p style={{ margin: "7px 0px" }}>반려 사유를 등록해야 합니다. </p>
            </div>
            <div style={{ display: "flex", justifyContent: "right" }}>
              <ChildModal close={handleClose} />
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
