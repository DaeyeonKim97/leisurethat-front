import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "primary",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#00AEEF",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "2px solid #00AEEF",
    },
    "&:hover fieldset": {
      border: "2px solid #00AEEF",
    },
    "&.Mui-focused fieldset": {
      border: "2px solid #00AEEF",
    },
  },
});

export default function CurrentCalculate() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Item>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <label
              style={{
                marginLeft: "20px",
                width: "150px",
                alignItems: "center",
                padding: "1%",
              }}
            >
              총 모집금액
            </label>
            <CssTextField
              id="outlined-basic"
              // label="프로젝트 명"
              value={10000}
              variant="outlined"
              size="small"
              style={{ margin: "0px 15px", width: "300px" }}
              inputProps={{ readOnly: true }}
            />
            <label
              style={{
                marginLeft: "20px",
                width: "150px",
                alignItems: "center",
                padding: "1%",
              }}
            >
              총 실 결제 금액
            </label>
            <CssTextField
              id="outlined-basic"
              // label="제작자 ID"
              value={10000}
              variant="outlined"
              size="small"
              style={{ margin: "0px 15px", width: "300px" }}
              inputProps={{ readOnly: true }}
            />
          </Box>
        </Item>
      </Box>
      <br />
      <Box sx={{ flexGrow: 1 }}>
        <Item>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <label
              style={{
                marginLeft: "20px",
                width: "150px",
                alignItems: "center",
                padding: "1%",
              }}
            >
              1차 정산금
            </label>
            <CssTextField
              id="outlined-basic"
              value={10000}
              variant="outlined"
              size="small"
              style={{ margin: "0px 15px", width: "300px" }}
              inputProps={{ readOnly: true }}
            />
            <label
              style={{
                marginLeft: "20px",
                width: "150px",
                alignItems: "center",
                padding: "1%",
              }}
            >
              2차 정산금
            </label>
            <CssTextField
              id="outlined-basic"
              value={10000}
              variant="outlined"
              size="small"
              style={{ margin: "0px 15px", width: "300px" }}
              inputProps={{ readOnly: true }}
            />
          </Box>
        </Item>
      </Box>
    </>
  );
}
