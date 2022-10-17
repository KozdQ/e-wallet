import {cleanup, render} from "@testing-library/react";
import React from "react";
import NumKey from "../../components/NumKey";

afterEach(cleanup)
jest.useFakeTimers();

test("num key", () => {
    const {container, getByText} = render(<NumKey extraStyle={""} name={"Hello"}/>);
    const div = getByText("Hello");
    div.click()
    jest.runAllTimers();
    expect(div.textContent).toEqual("Hello");
});