import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminLayout from '../layouts/AdminLayout'
import GiveupPage from '../pages/GiveupPage'
import JudgePage from '../pages/JudgePage'
import PreOpenPage from '../pages/PreOpenPage'
import ProceedingPage from '../pages/ProceedingPage'
import Payment from '../pages/Payment'
import ProjectPayment from '../pages/ProjectPayment'

export default function AdminRouter() {
  console.log('admin router')
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route path="judge" element={<JudgePage />} />
        <Route path="pre-open" element={<PreOpenPage />} />
        <Route path="proceeding" element={<ProceedingPage />} />
        <Route path="giveup" element={<GiveupPage />} />
        <Route path="payment" element={<Payment />} />
        <Route path="payment-state" element={<ProjectPayment />} />
      </Route>
    </Routes>
  )
}
