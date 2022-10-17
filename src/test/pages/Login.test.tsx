import {cleanup, getByTestId, render} from "@testing-library/react";
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "../../pages/Login";


afterEach(cleanup)

test("login", () => {
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
            <Route path={"/"} element={<Login/>}/>
            <Route path={"/topup"} element={<Login/>}/>
        </Routes>
    </BrowserRouter>)


    const img_1 = getByAltText("backward");
    img_1.click();

    const input_1 = getByPlaceholderText("phone");
    input_1.click()
    input_1.blur()

    const input_2 = getByPlaceholderText("password");
    input_2.click()
    input_2.blur()

    const bottom_1 = getByTestId("numpad");
    bottom_1.click();
})