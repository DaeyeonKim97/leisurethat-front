import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { callGetOrderCancleList } from "../../apis/OrderAPICalls";
import {
  GET_OFFSET_ORDERCANCLE,
  GET_OFFSET_RESET,
} from "../../../modules/cancle/OrderSearchModule";

import { Pagination } from "@mui/material";

export default function CanclePagination() {
  const dispatch = useDispatch();
  const results = useSelector((state) => state.orderReducer);
  const { id, sponserName, offset } = useSelector(
    (state) => state.orderCancleSearchReducer
  );
  console.log(offset);

  const { projectId } = useParams();

  const pageCount = results.canclePage;

  useEffect(() => {
    dispatch({ type: GET_OFFSET_RESET });
  }, [id, sponserName]);

  return (
    <Pagination
      count={pageCount ? pageCount.page : 0}
      color="primary"
      variant="outlined"
      page={offset}
      onChange={(e, page) => {
        const offset = page - 1;
        dispatch({ type: GET_OFFSET_ORDERCANCLE, payload: page });
        dispatch(
          callGetOrderCancleList({ projectId, id, sponserName, offset })
        );
      }}
    />
  );
}
