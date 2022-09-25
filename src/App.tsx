import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Onboarding from "./pages/Onboarding";
import Homepage from "./pages/Homepage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/on-boarding"} element={<Onboarding/>}/>
                <Route path={"/homepage"} element={<Homepage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;