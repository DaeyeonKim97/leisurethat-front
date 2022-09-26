import Divider from "@mui/material/Divider";
import CalculateSearchForm from "../components/calculate/CalculateSearchForm";
import CalculateTable from "../components/calculate/CalculateTable";
export default function CalcaulatePage() {
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
          총 <span style={{ color: "#6297BA" }}>22320</span> 개
        </section>

        <CalculateTable />
      </div>
    </section>
  );
}
