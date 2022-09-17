import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PublicLayout from '../layouts/PublicLayout'
import PublicMain from '../pages/PublicMain'
export default function PublicRouter() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route path="/" element={<PublicMain />} />
      </Route>
    </Routes>
  )
}
