import {cleanup, render} from "@testing-library/react";
import React from "react";
import HeadingText from "../../components/HeadingText";

afterEach(cleanup)

test("heading text", () => {

    const {container} = render(<HeadingText extraStyle={""} text={"Hello"}/>);

    expect(container.textContent).toEqual("Hello");

});