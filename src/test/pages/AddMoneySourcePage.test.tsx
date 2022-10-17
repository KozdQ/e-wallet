import {act, cleanup, fireEvent, getByTestId, render} from "@testing-library/react";
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AddMoneySourcePage from "../../pages/AddMoneySourcePage";
import OCB from "../../resources/images/banks/OCB.svg"


afterEach(cleanup)

test("add money source page", () => {
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
            <Route path={"/"} element={<AddMoneySourcePage/>}/>
            <Route path={"/topup"} element={<AddMoneySourcePage/>}/>
        </Routes>
    </BrowserRouter>)

    let select = getByTestId("select-field");
    act(() => {
        fireEvent.change(select, {target: {value: OCB}})
    })
    // @ts-ignore
    expect(select.value).toBe(OCB);

    const input_1 = getByPlaceholderText("1234 1234 1234 1234");
    input_1.click();
    input_1.blur();

    const numpad = getByTestId("numpad");
    numpad.click();

    const img_1 = getByAltText("backward")
    img_1.click();
})