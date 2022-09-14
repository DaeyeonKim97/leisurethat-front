import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminLayout from "../layouts/AdminLayout";

export default function AdminRouter(){
    console.log('admin router');
    return (
            <Routes>
                <Route path="/" element={<AdminLayout/>} >
                    
                </Route>
            </Routes>
    )
}