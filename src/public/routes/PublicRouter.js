import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PublicLayout from '../layouts/PublicLayout'
import PublicComplete from '../pages/PublicComplete'
import PublicCreateProject from '../pages/PublicCreateProject'
import PublicLogin from '../pages/PublicLogin'
import PublicMain from '../pages/PublicMain'
import PublicPayment from '../pages/PublicPayment'

export default function PublicRouter() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route path="/" element={<PublicMain />} />
        <Route path="/user/login" element={<PublicLogin />} />
        <Route path="/user/createproject" element={<PublicCreateProject />} />
        <Route path="/payment/complete" element={<PublicComplete />} />
        <Route path="/payment" element={<PublicPayment />} />
      </Route>
    </Routes>
  )
}
