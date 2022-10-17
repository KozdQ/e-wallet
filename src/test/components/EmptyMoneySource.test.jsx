import {cleanup, render} from "@testing-library/react";
import React from "react";
import EmptyMoneySource from "../../components/EmptyMoneySource";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import userEvent from "@testing-library/user-event";

afterEach(cleanup)

test("empty money source", () => {
	const mockedNavigate = jest.fn()
	jest.mock('react-router-dom', () => ({
		...jest.requireActual('react-router-dom'), useNavigate: () => (mockedNavigate)
	}));

	const {getByAltText} = render(<BrowserRouter>
		<Routes>
			<Route path={"/"} element={<EmptyMoneySource/>}/>
			<Route path={"/money-source"} element={<EmptyMoneySource/>}/>
		</Routes>
	</BrowserRouter>)

	const img = getByAltText("add card");
	userEvent.click(img);

	expect(mockedNavigate).toBeCalledTimes(0);

})