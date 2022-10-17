import {cleanup, getByTestId, render} from "@testing-library/react";
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Topup from "../../pages/Topup";


afterEach(cleanup)

test("top up", () => {
    // const mockedNavigate = jest.fn()
    // jest.mock('react-router-dom', () => ({
    //     ...jest.requireActual('react-router-dom'), useNavigate: () => (mockedNavigate)
    // }));

    const mockedUseEffect = jest.fn()
    jest.mock('react', () => ({
        ...jest.requireActual('react'),
        useEffect: () => (mockedUseEffect)
    }))

    const {getByAltText, getByTestId} = render(<BrowserRouter>
        <Routes>
            <Route path={"/"} element={<Topup/>}/>
            <Route path={"/topup"} element={<Topup/>}/>
        </Routes>
    </BrowserRouter>)

    const bottom = getByTestId("numpad");
    bottom.click();

    const img_1 = getByAltText("backward");
    img_1.click();
})