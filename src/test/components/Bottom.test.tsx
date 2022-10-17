import {cleanup, render} from "@testing-library/react";
import React from "react";
import Bottom from "../../components/Bottom";

afterEach(cleanup)

test("bottom", () => {
    const onClick = jest.fn();

    const {container} = render(<Bottom extraStyle={""} onClick={onClick} name={"Hello"}/>)

    expect(container.textContent).toEqual("Hello");
})