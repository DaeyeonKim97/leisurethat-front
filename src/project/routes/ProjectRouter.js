import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProjectLayout from '../layouts/ProjectLayout'
import WaitingPaymentPage from '../pages/WaitingPaymentPage'
import CompletePaymentPage from '../pages/CompletePaymentPage'

export default function ProjectRouter() {
  return (
    <Routes>
      <Route path="/" element={<ProjectLayout />}>
        <Route path="/waiting" element={<WaitingPaymentPage />} />
        <Route path="/complete" element={<CompletePaymentPage />} />
      </Route>
    </Routes>
  )
}
