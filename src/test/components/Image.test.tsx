import {cleanup, render} from "@testing-library/react";
import React from "react";
import Image from "../../components/Image";

afterEach(cleanup)

test("image", () => {
    render(<Image src={""} alt={""}/>);
});