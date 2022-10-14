import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";

import { callGetMyFundingList } from "../../apis/MyPageAPICalls";
import { GET_FUNDING_OFFSET } from "../../../modules/mypage/MypageModule";

export default function FundingPaging() {
  const results = useSelector((state) => state.mypageReducer);
  const dispatch = useDispatch();
  const fundingCount = results.fundingCount;
  const offset = results.fundingOffset;
  console.log(offset);
  return (
    <Stack spacing={2}>
      <Pagination
        count={fundingCount ? fundingCount : 0}
        color="primary"
        variant="outlined"
        shape="rounded"
        sx={{ padding: "0 29%" }}
        page={offset}
        onChange={(e, page) => {
          const offset = page - 1;
          dispatch({ type: GET_FUNDING_OFFSET, payload: page });
          dispatch(callGetMyFundingList({ offset }));
        }}
      />
    </Stack>
  );
}
