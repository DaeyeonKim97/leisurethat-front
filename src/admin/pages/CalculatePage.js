import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Divider from "@mui/material/Divider";
import CalculateSearchForm from "../components/calculate/CalculateSearchForm";
import CalculateTable from "../components/calculate/CalculateTable";
import CalculatePagination from "../components/calculate/CalculatePagination";

import { callGetCalculateList } from "../apis/CalculateAPICalls";
import { INIT_JUDGE_SUCCESS } from "../../modules/calculate/CalculateJudgeModule";
import { INIT_PUT_SUCCESS } from "../../modules/calculate/CalculateRejectModifyModule";
import { INIT_CALCULATE_REJECT } from "../../modules/calculate/CalculateModule";
export default function CalcaulatePage() {
  const { projectId } = useParams();
  const results = useSelector((state) => state.calculateJudgeReducer);
  console.log(results);
  const results2 = useSelector((state) => state.calculateRejectModifyReducer);
  console.log(results2);
  const dispatch = useDispatch();

  useEffect(() => {
    if (results.postSuccess !== "" || results2.putSuccess !== "") {
      dispatch({ type: INIT_CALCULATE_REJECT });
      dispatch(callGetCalculateList({ projectId }));
      dispatch({ type: INIT_JUDGE_SUCCESS });
      dispatch({ type: INIT_PUT_SUCCESS });
    }
  }, [results.postSuccess, results2.putSuccess]);

  return (
    <section style={{ padding: 40, height: "calc(100% - 64px)" }}>
      <header style={{ color: "#00AEEF", fontSize: 36, fontWeight: "bold" }}>
        정산 통합 관리
      </header>

      <Divider
        style={{ boxShadow: "0px 2px 4px gray", margin: "15px 0px 25px 0px" }}
      />

      <CalculateSearchForm />

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
          {/* 총 <span style={{ color: "#6297BA" }}>22320</span> 개 */}
        </section>

        <CalculateTable />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <CalculatePagination />
        </div>
      </div>
    </section>
  );
}
