import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProjectLayout from '../layouts/ProjectLayout'
import WaitingPaymentPage from '../pages/WaitingPaymentPage'
import CompletePaymentPage from '../pages/CompletePaymentPage'
import CalculatePage from '../pages/CalculatePage'
import CanclePage from '../pages/CanclePage'

export default function ProjectRouter() {
  return (
    <Routes>
      <Route path=":projectId" element={<ProjectLayout />}>
        <Route path="waiting" element={<WaitingPaymentPage />} />
        <Route path="complete" element={<CompletePaymentPage />} />
        <Route path="calculate" element={<CalculatePage />} />
        <Route path="cancle" element={<CanclePage />} />
      </Route>
    </Routes>
  )
}
