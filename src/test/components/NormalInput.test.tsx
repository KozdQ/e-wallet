import {cleanup, render} from "@testing-library/react";
import React from "react";
import NormalInput from "../../components/NormalInput";

afterEach(cleanup)

test("normal input", () => {
    const onBlur = jest.fn();
    const {getByPlaceholderText} = render(<NormalInput typeInput={""} inputPlaceholder={"text"} onBlur={onBlur}/>);
    const input = getByPlaceholderText("text");
    input.blur();
    expect(onBlur).toBeCalledTimes(0);
});