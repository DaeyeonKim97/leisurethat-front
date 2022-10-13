import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { callCalculateJudgeModifyAPI } from "../../apis/CalculateAPICalls";
import { SET_PUT_SUCCESS } from "../../../modules/calculate/CalculateRejectModifyModule";
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

export default function CalculateModifyModal(props) {
  const dispatch = useDispatch();
  const results = useSelector((state) => state.calculateRejectModifyReducer);

  const { close } = props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    let formData = new FormData();

    formData.append("rejectId", results.rejectId);
    formData.append("judgeId", results.judgeId);
    formData.append("rejectContent", results.rejectContent);

    dispatch(callCalculateJudgeModifyAPI(formData));
    dispatch({ type: SET_PUT_SUCCESS });

    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    close();
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        sx={{ fontWeight: "bold" }}
        onClick={handleOpen}
      >
        수정
      </Button>
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
              수정 완료 되었습니다.
            </Typography>
            <div style={{ padding: "10px 0px 15px 0px", color: "#757575" }}>
              <p style={{ margin: "7px 0px" }}>LEISURETHAT SAMPLEPROJECT 01 </p>
              <p style={{ margin: "7px 0px" }}>2022-07-29 leisurethat01</p>
              <p style={{ margin: "7px 0px" }}>
                반려 사유 / 피드백을 수정하셨습니다.
              </p>
              <p style={{ margin: "7px 0px", color: "#00AEEF" }}>
                {new Date().toString()}
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
            </div>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
