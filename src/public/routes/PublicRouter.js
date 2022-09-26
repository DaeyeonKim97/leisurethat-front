import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PublicLayout from '../layouts/PublicLayout'
import PublicComplete from '../pages/PublicComplete'
import PublicCreateProject from '../pages/PublicCreateProject'
import PublicLogin from '../pages/PublicLogin'
import PublicMain from '../pages/PublicMain'
import PublicSignup from '../pages/PublicSignup'
import MatchId from '../pages/MatchId'
import Mypage from '../pages/Mypage'
import ProjectDetail from '../pages/ProjectDetail'
import PublicPayment from '../pages/PublicPayment'

export default function PublicRouter() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route path="/" element={<PublicMain />} />
        <Route path="/Login" element={<PublicLogin />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/signup" element={<PublicSignup />} />
        <Route path="/match/id" element={<MatchId />} />
        <Route path="/Complete" element={<PublicBuyComplete />} />
        <Route path="/Buying" element={<PublicBuying />} />
        <Route path="mypage" element={<Mypage />} />
        <Route path="/project-detail/:projectId" element={<ProjectDetail />} />
        <Route path="/user/login" element={<PublicLogin />} />
        <Route path="/user/createproject" element={<PublicCreateProject />} />
        <Route path="/payment/complete" element={<PublicComplete />} />
        <Route path="/payment" element={<PublicPayment />} />
      </Route>
    </Routes>
  )
}
