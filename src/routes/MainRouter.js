import AdminRouter from "../admin/routes/AdminRouter";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function MainRouter(){

    console.log('main router...');

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/admin/*" element={<AdminRouter/>} />
                
            </Routes>
        </BrowserRouter>
    )
}