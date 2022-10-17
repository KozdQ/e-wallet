import React from "react";
import AddMoneySource from "../../components/AddMoneySource";
import OCB from "../../resources/images/banks/OCB.svg"
import {cleanup, render} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

afterEach(cleanup)

test("add money source", () => {
    const setCardNumber = jest.fn();

    const {getByPlaceholderText} = render(<AddMoneySource iconUrl={OCB} name={"OCB"} setCardNumber={setCardNumber}/>)

    const input = getByPlaceholderText("1234 1234 1234 1234");

    userEvent.type(input, "12345612345612a456");
    // @ts-ignore
    expect(input.value).toEqual("1234 5612 3456 1245");

    input.blur();
    expect(setCardNumber).toBeCalledWith("1234561234561245");
})