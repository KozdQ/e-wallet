import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Onboarding from "./pages/Onboarding";
import Homepage from "./pages/Homepage";
import Topup from "./pages/Topup";
import Receipt from "./pages/Receipt";
import AddMoneySourcePage from "./pages/AddMoneySourcePage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/on-boarding"} element={<Onboarding/>}/>
                <Route path={"/homepage"} element={<Homepage/>}/>
                <Route path={"/topup"} element={<Topup/>}/>
                <Route path={"/money-source"} element={<AddMoneySourcePage/>}/>
                <Route path={"/receipt"} element={<Receipt/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;