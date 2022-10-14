import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import InputLabel from "@mui/material/InputLabel";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { Divider, TextField } from "@mui/material";
import Button from "@mui/material/Button";

import { callGetSponserInfo } from "../../apis/OrderAPICalls";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 512,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
};

export default function SponserInfoModal(props) {
  const dispatch = useDispatch();
  const results = useSelector((state) => state.orderReducer);
  const sponserInfo = results.sponserInfo;

  const [open, setOpen] = React.useState(false);

  const handleOpen = (orderId) => {
    setOpen(true);
    dispatch(callGetSponserInfo({ orderId }));
  };
  const handleClose = () => {
    setOpen(false);
  };

  function createData(
    name,
    sponserId,
    orderId,
    phone,
    basicAddress,
    detailAddress
  ) {
    return {
      name,
      sponserId,
      orderId,
      phone,
      basicAddress,
      detailAddress,
    };
  }

  return (
    <div>
      <div
        onClick={() => {
          handleOpen(props.orderId);
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
          <Typography id="modal-modal-title" variant="h5" component="h1">
            후원자 정보
          </Typography>
          <Divider style={{ marginBottom: "20px" }} />
          {sponserInfo ? (
            <Box>
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                sx={{
                  padding: "1%",
                }}
              >
                <InputLabel sx={{ color: "black", width: "100px" }}>
                  후원자{" "}
                </InputLabel>
                <TextField
                  sx={{ width: "300px" }}
                  defaultValue={sponserInfo.name}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                sx={{
                  padding: "1%",
                }}
              >
                <InputLabel sx={{ color: "black", width: "100px" }}>
                  후원자 id
                </InputLabel>
                <TextField
                  sx={{ width: "300px" }}
                  defaultValue={sponserInfo.userName}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                sx={{
                  padding: "1%",
                }}
              >
                <InputLabel sx={{ color: "black", width: "100px" }}>
                  주문 번호
                </InputLabel>
                <TextField
                  sx={{ width: "300px" }}
                  defaultValue={sponserInfo.orderId}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Stack>
              <Stack
                direction="row"
                spacing={6.5}
                sx={{
                  padding: "1%",
                }}
              >
                <InputLabel
                  sx={{ color: "black", width: "100px", marginTop: "1%" }}
                >
                  배송지
                </InputLabel>
                <Box>
                  <TextField
                    sx={{ width: "300px" }}
                    defaultValue={sponserInfo.basicAddress}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                  <TextField
                    sx={{ width: "300px" }}
                    defaultValue={sponserInfo.detailAddress}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </Box>
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                sx={{
                  padding: "1%",
                }}
              >
                <InputLabel sx={{ color: "black", width: "100px" }}>
                  휴대폰
                </InputLabel>
                <TextField
                  sx={{ width: "300px" }}
                  defaultValue={sponserInfo.phone}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Stack>
            </Box>
          ) : (
            ""
          )}

          <Box
            sx={{ margin: "20px", display: "flex", justifyContent: "center" }}
          >
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
    </div>
  );
}
