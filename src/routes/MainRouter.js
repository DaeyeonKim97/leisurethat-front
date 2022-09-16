import AdminRouter from '../admin/routes/AdminRouter'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProjectRouter from '../project/routes/ProjectRouter'
import PublicRouter from '../public/routes/PublicRouter'
import { GlobalStyle } from '../styled'

export default function MainRouter() {
  console.log('main router...')

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/admin/*" element={<AdminRouter />} />
          <Route path="/project/*" element={<ProjectRouter />} />
          <Route path="/*" element={<PublicRouter />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
