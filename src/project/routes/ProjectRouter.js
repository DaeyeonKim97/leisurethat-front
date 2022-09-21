import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectLayout from "../layouts/ProjectLayout";
import CalculatePage from "../pages/CalculatePage";
import CanclePage from "../pages/CanclePage";

export default function ProjectRouter() {
  return (
    <Routes>
      <Route path="/">
        <Route path=":projectId" element={<ProjectLayout />}>
          <Route path="calculate" element={<CalculatePage />} />
          <Route path="cancle" element={<CanclePage />} />
        </Route>
      </Route>
    </Routes>
  );
}
