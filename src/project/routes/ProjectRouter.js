import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProjectLayout from '../layouts/ProjectLayout'
import WaitingPaymentPage from '../pages/WaitingPaymentPage'

export default function ProjectRouter() {
  return (
    <Routes>
      <Route path="/" element={<ProjectLayout />}>
        <Route path="/" element={<WaitingPaymentPage />} />
      </Route>
    </Routes>
  )
}
