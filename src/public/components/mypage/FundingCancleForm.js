import Box from "@mui/material/Box";
import { Typography, Button } from "@mui/material";

export default function FundingCalcleForm({ close }) {
  return (
    <>
      <Box sx={{ p: "0 15px 10px 20px" }}>
        <Typography id="modal-modal-title" variant="h5">
          후원 취소 처리하시겠습니까?
        </Typography>
        <div style={{ padding: "10px 0px 15px 0px", color: "#757575" }}>
          <p style={{ margin: "7px 0px" }}>
            단 1초 만에 구명튜브로 변신! 수상 레저의 수호신, 에스튜브!{" "}
          </p>
          <p style={{ margin: "7px 0px" }}>2022-08-22 leisurethat01</p>
          <p style={{ margin: "7px 0px" }}>후원 취소 처리하시겠습니까</p>
        </div>
        <div style={{ display: "flex", justifyContent: "right" }}>
          <Button variant="contained" onClick={close}>
            확인
          </Button>
          <Button variant="outlined" onClick={close}>
            취소
          </Button>
        </div>
      </Box>
    </>
  );
}
