import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicLayout from '../layouts/PublicLayout';

export default function PublicRouter(){
    return (
            <Routes>
                <Route path="/" element={<PublicLayout/>} >
                    
                </Route>
            </Routes>
    )
}