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
              1차 정산 신청이 완료되었습니다.
            </Box>
            <Box
              sx={{ color: "#757575", margin: "20px 0", lineHeight: "20px" }}
            >
              LEISURETHAT SAMPLE PROJECT 01
              <br />
              2022-07-29 leisurethat01
              <br />
              1차 정산 신청이 완료되었습니다.
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
  const { buttonText } = props;

  const [open, setOpen] = React.useState(false);
  const [files, setFiles] = React.useState([]);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const inputFiles = (e) => {
    let fileSize = 0;
    for (let i = 0; i < e.target.files.length; i++) {
      fileSize += e.target.files[i].size;
    }

    const maxSize = 10 * 1024 * 1024;
    let fileList = [];
    if (fileSize > maxSize) {
      alert("첨부파일 사이즈는 10MB 이내로 등록 가능합니다.");
      e.target.files = "";
      return false;
    } else {
      for (let i = 0; i < e.target.files.length; i++) {
        fileList.push(e.target.files[i]);
      }
      setFiles(fileList);
    }
  };

  const deleteFile = (id) => {
    setFiles(
      files.filter((file, i) => {
        console.log(file, i, id);

        return i !== id;
      })
    );
  };

  function createData(totalCal, cal1st) {
    return {
      totalCal,
      cal1st,
    };
  }

  const data = createData("10,000,000", "8,000,000");

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
              1차 정산 신청
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
                    배송 완료
                  </TableCell>
                  <TableCell align="center">{data.totalCal}</TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    align="center"
                    sx={{ fontWeight: "bold", width: "50%" }}
                  >
                    배송 완료
                  </TableCell>
                  <TableCell align="center">{data.cal1st}</TableCell>
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
              파일 선택
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
              등록할 파일을 선택한 후 [등록] 버튼을 클릭해주세요.
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
                          onClick={() => deleteFile(id)}
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
                  취소
                </Button>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
