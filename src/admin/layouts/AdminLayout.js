import { Outlet } from 'react-router-dom';
import AdminHeader from '../components/commons/AdminHeader';


function AdminLayout() {

    return (
        <div>
            <AdminHeader/>
            <Outlet/>
        </div>
    );
}

export default AdminLayout;