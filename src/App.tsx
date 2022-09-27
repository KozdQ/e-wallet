import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Onboarding from "./pages/Onboarding";
import Homepage from "./pages/Homepage";
import Topup from "./pages/Topup";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/on-boarding"} element={<Onboarding/>}/>
                <Route path={"/homepage"} element={<Homepage/>}/>
                <Route path={"/topup"} element={<Topup/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;