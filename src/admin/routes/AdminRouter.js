import { BrowserRouter, Routes, Route } from "react-router-dom";
import CalculatePage from "../pages/CalculatePage";
import AdminLayout from "../layouts/AdminLayout";
import JudgePage from "../pages/JudgePage";
import PreOpenPage from "../pages/PreOpenPage";
import ProceedingPage from "../pages/ProceedingPage";

export default function AdminRouter() {
  console.log("admin router");
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route path="judge" element={<JudgePage />} />
        <Route path="pre-open" element={<PreOpenPage />} />
        <Route path="proceeding" element={<ProceedingPage />} />
        <Route path="calculate" element={<CalculatePage />} />
      </Route>
    </Routes>
  );
}
