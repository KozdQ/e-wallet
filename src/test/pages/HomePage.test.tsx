import {cleanup, getByTestId, render} from "@testing-library/react";
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Homepage from "../../pages/Homepage";


afterEach(cleanup)

test("home page", () => {
    // const mockedNavigate = jest.fn()
    // jest.mock('react-router-dom', () => ({
    //     ...jest.requireActual('react-router-dom'), useNavigate: () => (mockedNavigate)
    // }));

    const mockedUseEffect = jest.fn()
    jest.mock('react', () => ({
        ...jest.requireActual('react'),
        useEffect: () => (mockedUseEffect)
    }))

    const {getByTestId, getByAltText, getByPlaceholderText} = render(<BrowserRouter>
        <Routes>
            <Route path={"/"} element={<Homepage/>}/>
            <Route path={"/topup"} element={<Homepage/>}/>
        </Routes>
    </BrowserRouter>)
})