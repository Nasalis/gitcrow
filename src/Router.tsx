import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Repository } from "./pages/Repository";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/repository/:user/:repository" element={<Repository/>}/>
        </Routes>
    )
}