import React, {ChangeEvent} from "react";

function handleFormatCurrency(event: ChangeEvent<HTMLInputElement>) {
    let value = event.currentTarget.value.replaceAll(".", "");
    for (let i = value.length - 3; i > 0; i -= 3) {
        value = value.slice(0, i) + "." + value.slice(i);
    }
    event.currentTarget.value = value;
}

function AmountInput(props: any) {
    return (
        <div className={"w-full mt-2"}>
            <input
                className={"w-full mt-2 p-2 border text-center font-bold text-xl font-san text-slate-600 rounded-md placeholder:italic placeholder:font-light"}
                type={"text"}
                placeholder={"amount"}
                onKeyDown={(event) => {
                    if (event.key == "Backspace") {

                    } else if (!/[0-9]/.test(event.key)) {
                        event.preventDefault()
                    }
                }}
                onChange={(event) => {
                    handleFormatCurrency(event)
                }}/>
        </div>
    )
}

AmountInput.propTypes = {

}

export default AmountInput;