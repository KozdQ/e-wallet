import React, {ChangeEvent} from "react";
import SwapIcon from "../resources/images/swap.png";
import PropTypes from "prop-types";

function handleFormatCardNumber(event: ChangeEvent<HTMLInputElement>) {
    let value = event.currentTarget.value.replaceAll(" ", "")
    for (let i = 4; i < value.length; i += 5) {
        value = value.slice(0, i) + " " + value.slice(i)
    }
    event.currentTarget.value = value
}

function AddMoneySource(props: any) {
    return (
        <div className={"mt-3"}>
            <div className={"text-xs font-semibold ml-2"}>Money Source</div>
            <div className={"flex flex-row justify-around w-full h-14 border rounded-md mt-0.5 p-2"}>
                <img className={"h-2/3 mt-auto mb-auto ml-3 mr-3"} src={props.iconUrl} alt={props.name}/>
                <input
                    className={"w-full leading-9 text-base font-medium text-center text-slate-700 placeholder:text-sm outline-none "}
                    type={"text"}
                    placeholder={"1234 1234 1234 1234"}
                    onKeyDown={(event) => {
                        if (event.key == "Backspace") {

                        } else if (event.currentTarget.value.length > 16 + 2) {
                            event.preventDefault()
                        } else if (!/[0-9]/.test(event.key)) {
                            event.preventDefault()
                        }
                    }}
                    onChange={(event) => {
                        handleFormatCardNumber(event)
                    }}
                    onBlur={(event) => {
                        const cardNumber = event.currentTarget.value.replaceAll(" ", "");
                        props.setCardNumber(cardNumber);
                    }}
                />

            </div>
        </div>
    )
}

export default AddMoneySource;