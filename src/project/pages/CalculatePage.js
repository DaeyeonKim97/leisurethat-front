import Divider from "@mui/material/Divider";
import CalculateTable from "../components/calculate/CalculateTable";
import CurrentCalculate from "../components/calculate/CurrentCalculate";
import Stack from "@mui/material/Stack";

function CalculatePage() {
  return (
    <section style={{ padding: 40, height: "calc(100% - 64px)" }}>
      <header style={{ color: "#00AEEF", fontSize: 36, fontWeight: "bold" }}>
        정산 신청 현황
      </header>

      <Divider
        style={{
          boxShadow: "0px 2px 4px gray",
          margin: "15px 0px 25px 0px",
        }}
      />

      <CurrentCalculate />

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
        ></section>

        <CalculateTable />
      </div>
    </section>
  );
}

export default CalculatePage;
