import { Outlet } from 'react-router-dom'
import ProjectHeader from '../components/common/ProjectHeader'

function ProjectLayout() {
  return (
    <div style={{ height: '100vh' }}>
      <ProjectHeader />
      <Outlet />
    </div>
  )
}

export default ProjectLayout
