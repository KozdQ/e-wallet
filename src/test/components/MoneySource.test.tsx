import {cleanup, render} from "@testing-library/react";
import React from "react";
import MoneySource from "../../components/MoneySource";

afterEach(cleanup)

test("money source", () => {
    render(<MoneySource iconUrl={""} name={"OCB"} l4no={"1234"}/>);
});