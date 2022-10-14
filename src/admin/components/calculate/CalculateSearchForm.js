import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import { Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { callGetCalculateList } from "../../apis/CalculateAPICalls";

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

export default function CalculateSearchForm() {
  const [currency, setCurrency] = React.useState("null");
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Item>
        <Grid container spacing={2}>
          <Grid
            item
            xs={10}
            style={{
              display: "flex",
              justifyContent: "left",
              alignItems: "center",
            }}
          >
            <SearchIcon style={{ marginLeft: "15px" }} />
            <Typography
              variant="h6"
              style={{
                margin: "0 15px 0 15px",
                display: "flex",
                alignItems: "center",
              }}
            >
              검색
            </Typography>
            <CssTextField
              id="outlined-basic"
              label="프로젝트 명"
              variant="outlined"
              size="small"
              style={{ margin: "0px 15px" }}
            />
            <CssTextField
              id="outlined-basic"
              label="제작자 ID"
              variant="outlined"
              size="small"
            />
            <CssTextField
              id="selectCalculateState"
              select
              label="정산 현황"
              value={currency}
              onChange={handleChange}
              size="small"
              style={{ margin: "0px 15px", width: "200px" }}
            >
              <MenuItem value="null">-----</MenuItem>
              <MenuItem value="승인 대기">승인 대기</MenuItem>
              <MenuItem value="승인 완료">승인 완료</MenuItem>
              <MenuItem value="정산 완료">정산 완료</MenuItem>
              <MenuItem value="정산 반려">정산 반려</MenuItem>
            </CssTextField>
          </Grid>
          <Grid
            item
            xs={2}
            style={{ display: "flex", justifyContent: "right" }}
          >
            <Button variant="contained">search</Button>
          </Grid>
        </Grid>
      </Item>
    </Box>
  );
}
