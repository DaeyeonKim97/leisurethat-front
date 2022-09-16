import { Outlet } from 'react-router-dom'
import PublicFooter from '../components/commons/PublicFooter'
import PublicHeader from '../components/commons/PublicHeader'
import PublicMain from '../pages/PublicMain'
function PublicLayout() {
  return (
    <div>
      <PublicHeader />
      <Outlet />
      <PublicFooter />
    </div>
  )
}

export default PublicLayout
