import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import { callGetMyProjectList } from "../../apis/MyPageAPICalls";
import { GET_PROJECT_OFFSET } from "../../../modules/mypage/MypageModule";

export default function PaginationRounded() {
  const results = useSelector((state) => state.mypageReducer);
  const dispatch = useDispatch();
  const projectCount = results.projectCount;
  const offset = results.projectOffset;
  console.log(offset);
  return (
    <Stack spacing={2}>
      <Pagination
        count={projectCount ? Math.ceil(projectCount / 4) : 0}
        color="primary"
        variant="outlined"
        shape="rounded"
        sx={{ padding: "0 29%" }}
        page={offset}
        onChange={(e, page) => {
          const offset = page - 1;
          dispatch({ type: GET_PROJECT_OFFSET, payload: page });
          dispatch(callGetMyProjectList({ offset }));
        }}
      />
    </Stack>
  );
}
