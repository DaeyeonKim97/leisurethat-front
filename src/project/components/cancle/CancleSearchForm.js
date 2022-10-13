import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

import { GET_SEARCH_ORDERCANCLE } from "../../../modules/cancle/OrderSearchModule";
import { callGetOrderCancleList } from "../../apis/OrderAPICalls";

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

export default function CancleSearchForm() {
  const dispatch = useDispatch();
  const { id, sponserName } = useSelector(
    (state) => state.orderCancleSearchReducer
  );
  const { projectId } = useParams();

  const onChange = (e) => {
    dispatch({
      type: GET_SEARCH_ORDERCANCLE,
      payload: {
        name: e.target.name,
        value: e.target.value,
      },
    });
  };

  const onClick = () => {
    console.log(id);
    console.log(sponserName);
    // 액션 생성 함수 import
    dispatch(callGetOrderCancleList({ projectId, sponserName, id }));
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
              name="id"
              label="주문 번호"
              variant="outlined"
              size="small"
              style={{ margin: "0px 15px" }}
              onChange={onChange}
            />
            <CssTextField
              id="outlined-basic"
              name="sponserName"
              label="후원자 명"
              variant="outlined"
              size="small"
              onChange={onChange}
            />
          </Grid>
          <Grid
            item
            xs={2}
            style={{ display: "flex", justifyContent: "right" }}
          >
            <Button variant="contained" onClick={onClick}>
              search
            </Button>
          </Grid>
        </Grid>
      </Item>
    </Box>
  );
}
