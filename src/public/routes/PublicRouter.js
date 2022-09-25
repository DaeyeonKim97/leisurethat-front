import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PublicLayout from '../layouts/PublicLayout'
import PublicBuyComplete from '../pages/PublicBuyComplete'
import PublicBuying from '../pages/PublicBuying'
import PublicLogin from '../pages/PublicLogin'
import PublicMain from '../pages/PublicMain'
import PublicSignup from '../pages/PublicSignup'
import MatchId from '../pages/MatchId'
import ProjectDetail from '../pages/ProjectDetail'
export default function PublicRouter() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route path="/" element={<PublicMain />} />
        <Route path="/Login" element={<PublicLogin />} />
        <Route path="/signup" element={<PublicSignup />} />
        <Route path="/match/id" element={<MatchId />} />
        <Route path="/Complete" element={<PublicBuyComplete />} />
        <Route path="/Buying" element={<PublicBuying />} />
        <Route path="/project-detail/:projectId" element={<ProjectDetail />} />
      </Route>
    </Routes>
  )
}
