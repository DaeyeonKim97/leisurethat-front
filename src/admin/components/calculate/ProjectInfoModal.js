
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Divider } from "@mui/material";
import ProjectInfo from "./ProjectInfo";
import { useDispatch } from "react-redux";
import { callGetCalculateProjectInfo } from "../../apis/CalculateAPICalls";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  height: 600,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
};

export default function MakerInfoModal(props) {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

  const handleOpen = (calculateId) => {
    setOpen(true);
    dispatch(callGetCalculateProjectInfo({ calculateId }));
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div
        onClick={() => {
          handleOpen(props.calculateId);
        }}
      >
        {props.children}
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            프로젝트 정보
          </Typography>
          <Divider style={{ marginBottom: "20px" }} />

          <ProjectInfo close={handleClose} />
        </Box>
      </Modal>
    </div>
  );

}
