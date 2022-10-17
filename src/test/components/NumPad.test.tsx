import {cleanup, render} from "@testing-library/react";
import React from "react";
import NumPad from "../../components/NumPad";

afterEach(cleanup)

test("num pad", () => {
    render(<NumPad onClick={() => {
    }}/>);
});