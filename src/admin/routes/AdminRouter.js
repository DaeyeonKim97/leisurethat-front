import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "../layouts/Layout";

export default function AdminRouter(){
    console.log('admin router');
    return (
            <Routes>
                <Route path="/" element={<Layout/>} >
                    
                </Route>
            </Routes>
    )
}