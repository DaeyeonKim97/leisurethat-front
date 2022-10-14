import Divider from "@mui/material/Divider";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { callGetOrderCancleList } from "../apis/OrderAPICalls";
import CancleSearchForm from "../components/cancle/CancleSearchForm";
import CancleTable from "../components/cancle/CancleTable";
import CanclePagination from "../components/cancle/CanclePagination";

function CanclePage() {
  const dispatch = useDispatch();
  const { projectId } = useParams();
  const results = useSelector((state) => state.orderReducer);

  const totalCount = results.cancleCount;
  console.log(totalCount);

  useEffect(() => {
    dispatch(callGetOrderCancleList({ projectId }));
  }, []);

  return (
    <section style={{ padding: 40, height: "calc(100% - 64px)" }}>
      <header style={{ color: "#00AEEF", fontSize: 36, fontWeight: "bold" }}>
        주문 통합 관리-주문 취소
      </header>

      <Divider
        style={{
          boxShadow: "0px 2px 4px gray",
          margin: "15px 0px 25px 0px",
        }}
      />

      <CancleSearchForm />

      <div
        className="whatsthis"
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          height: "calc(100% - 120px)",
        }}
      >
        <section
          style={{
            margin: "12px 20px",
            fontSize: "18px",
            alignSelf: "flex-end",
          }}
        >
          총{" "}
          <span style={{ color: "#6297BA" }}>
            {totalCount ? totalCount.count : ""}
          </span>
          개
        </section>

        <CancleTable />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <CanclePagination />
        </div>
      </div>
    </section>
  );
}

export default CanclePage;
