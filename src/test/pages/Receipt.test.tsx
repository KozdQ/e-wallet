import {act, cleanup, fireEvent, getByTestId, render} from "@testing-library/react";
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AddMoneySourcePage from "../../pages/AddMoneySourcePage";
import OCB from "../../resources/images/banks/OCB.svg"
import Onboarding from "../../pages/Onboarding";
import Receipt from "../../pages/Receipt";


afterEach(cleanup)

test("receipt", () => {
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
            <Route path={"/"} element={<Receipt/>}/>
            <Route path={"/topup"} element={<Receipt/>}/>
        </Routes>
    </BrowserRouter>)

    const bottom = getByTestId("numpad");
    bottom.click();

    const img_1 = getByAltText("backward");
    img_1.click();
})