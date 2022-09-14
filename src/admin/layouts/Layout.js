import { Outlet } from 'react-router-dom';
import AdminHeader from '../components/commons/AdminHeader';


function Layout() {

    return (
        <div>
            <AdminHeader/>
            <Outlet/>
        </div>
    );
}

export default Layout;