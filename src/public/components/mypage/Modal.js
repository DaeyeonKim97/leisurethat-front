import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import FundingCalcleForm from "./FundingCancleForm";
import ProjectJudgeFrom from "./ProjectJudgeForm";
import ReasonForm from "./ReasonForm";

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

function ChildModal2() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Open Child Modal</Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <h2 id="child-modal-title">Text in a child modal</h2>
          <Button onClick={handleClose}>Close Child Modal</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

function ChildModal({ modalType }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Open Child Modal</Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 500, height: 500 }}>
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
              <h2 id="child-modal-title">Text in a child modal</h2>
              {modalType == "two" ? (
                <Button onClick={handleClose}>Close Child Modal</Button>
              ) : (
                <ChildModal2 />
              )}
            </Box>
          </Box>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function NestedModal(props) {
  const { buttonText, buttonType, modalType } = props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {buttonType == "gray" ? (
        <Button
          variant="outlined"
          sx={{
            width: "140px",
            height: "30px",
            color: "#d9d9d9",
            border: "1px solid #d9d9d9",
          }}
          onClick={handleOpen}
        >
          {buttonText}
        </Button>
      ) : (
        <Button
          variant="outlined"
          sx={{ width: "140px", height: "30px" }}
          onClick={handleOpen}
        >
          {buttonText}
        </Button>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box
          sx={{
            ...style,
            width: "auto",
            height: "auto",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box sx={{ width: "100%" }}>
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
              {buttonText === "펀딩 취소" ? (
                <FundingCalcleForm close={handleClose} />
              ) : (
                ""
              )}
              {buttonText === "심사 요청중" ? <ProjectJudgeFrom /> : ""}
              {buttonText === "반려 사유 확인" ||
              buttonText === "취소 사유 확인" ||
              buttonText === "종료 사유 확인" ? (
                <ReasonForm />
              ) : (
                ""
              )}

              {modalType === "one" ? "" : <ChildModal modalType={modalType} />}
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
