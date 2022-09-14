import AdminRouter from '../admin/routes/AdminRouter'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProjectRouter from '../project/routes/ProjectRouter'
import PublicLayout from '../public/layouts/PublicLayout'
import { GlobalStyle } from '../styled'

export default function MainRouter() {
  console.log('main router...')

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/admin/*" element={<AdminRouter />} />
          <Route path="/project/*" element={<ProjectRouter />} />
          <Route path="/*" element={<PublicLayout />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
