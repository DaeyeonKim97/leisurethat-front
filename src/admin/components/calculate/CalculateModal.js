import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

import CalculateRejectForm from "./CalculateRejectForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
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
export default function NestedModal(props) {
  const { buttonText, currentState, round } = props;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
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
            {buttonText === "신청 내역" ? (
              ""
            ) : (
              // <CalculateHistoryForm
              //   round={round}
              //   currentState={currentState}
              //   close={handleClose}
              // />
              <CalculateRejectForm
                round={round}
                close={handleClose}
                childModal={ChildModal}
              />
            )}
          </Box>
        </Box>
      </Modal>
    </>
  );
}
