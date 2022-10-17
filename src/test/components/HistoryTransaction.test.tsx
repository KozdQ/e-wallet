import {cleanup, render} from "@testing-library/react";
import React from "react";
import HistoryTransaction from "../../components/HistoryTransaction";

afterEach(cleanup)

test("history transaction", () => {
    render(<HistoryTransaction iconUrl={""} date={""} amount={"100"} name={"Hello"}/>);
});