import {act, cleanup, fireEvent, getByTestId, render} from "@testing-library/react";
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AddMoneySourcePage from "../../pages/AddMoneySourcePage";
import OCB from "../../resources/images/banks/OCB.svg"
import Onboarding from "../../pages/Onboarding";


afterEach(cleanup)

test("on boarding", () => {
    // const mockedNavigate = jest.fn()
    // jest.mock('react-router-dom', () => ({
    //     ...jest.requireActual('react-router-dom'), useNavigate: () => (mockedNavigate)
    // }));

    const mockedUseEffect = jest.fn()
    jest.mock('react', () => ({
        ...jest.requireActual('react'),
        useEffect: () => (mockedUseEffect)
    }))

    const {getAllByTestId} = render(<BrowserRouter>
        <Routes>
            <Route path={"/"} element={<Onboarding/>}/>
            <Route path={"/topup"} element={<Onboarding/>}/>
        </Routes>
    </BrowserRouter>)

    const bottom = getAllByTestId("numpad")
    bottom.forEach((e, i) => {
        e.click()
    })
})