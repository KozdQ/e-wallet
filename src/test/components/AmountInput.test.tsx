import React from "react";
import {cleanup, render} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AmountInput from "../../components/AmountInput";

afterEach(cleanup)

test("amount input", () => {
    const setAmount = jest.fn();

    const {getByPlaceholderText} = render(<AmountInput setAmount={setAmount}/>)

    const input = getByPlaceholderText("amount");

    userEvent.type(input, "10a000");
    // @ts-ignore
    expect(input.value).toEqual("10.000");

    input.blur();
    expect(setAmount).toBeCalledWith("10000");
})