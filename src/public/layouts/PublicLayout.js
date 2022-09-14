import { Outlet } from 'react-router-dom'
import PublicFooter from '../components/commons/PublicFooter'
import PublicHeader from '../components/commons/PublicHeader'
import PublicMain from '../pages/PublicMain'
function PublicLayout() {
  return (
    <div>
      <PublicHeader />
      <PublicMain />
      <PublicFooter />
      <Outlet />
    </div>
  )
}

export default PublicLayout
