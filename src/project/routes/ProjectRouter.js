import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProjectLayout from '../layouts/ProjectLayout';

export default function ProjectRouter(){
    return (
            <Routes>
                <Route path="/" element={<ProjectLayout/>} >
                    
                </Route>
            </Routes>
    )
}