import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PublicLayout from '../layouts/PublicLayout'
import PublicBuyComplete from '../pages/PublicBuyComplete'
import PublicBuying from '../pages/PublicBuying'
import PublicLogin from '../pages/PublicLogin'
import PublicMain from '../pages/PublicMain'
export default function PublicRouter() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route path="/" element={<PublicMain />} />
        <Route path="/Login" element={<PublicLogin />} />
        <Route path="/Complete" element={<PublicBuyComplete />} />
        <Route path="/Buying" element={<PublicBuying />} />
      </Route>
    </Routes>
  )
}
