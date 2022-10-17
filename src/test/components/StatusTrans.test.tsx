import {cleanup, render} from "@testing-library/react";
import React from "react";
import StatusTrans from "../../components/StatusTrans";

afterEach(cleanup)

test("status transaction", () => {
    render(<StatusTrans iconUrl={""} status={""} desc={""}/>);
});