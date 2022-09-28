import React, {ChangeEvent} from "react";
import PropTypes from "prop-types";
import SwapIcon from "../resources/images/swap.png"

function handleFormatCardNumber(event: ChangeEvent<HTMLInputElement>) {
    let value = event.currentTarget.value.replaceAll(" ", "")
    for (let i = 4; i < value.length; i += 5) {
        value = value.slice(0, i) + " " + value.slice(i)
    }
    event.currentTarget.value = value
}

function MoneySource(props: any) {
    return (
        <div className={"mt-3"}>
            <div className={"text-xs font-semibold ml-2"}>Money Source</div>
            <div className={"flex flex-row justify-between w-full h-14 border rounded-md mt-0.5 p-2"}>
                <div className={"flex flex-row w-5/6"}>
                    <img className={"h-2/3 mt-auto mb-auto ml-3 mr-3"} src={props.iconUrl} alt={props.name}/>
                    <div
                        className={"w-full leading-10 text-base font-medium text-center text-slate-700 placeholder:text-sm outline-none "}>
                        {props.name + " ***1234"}
                    </div>
                </div>
                <img className={"h-2/3 mt-auto mb-auto"} src={SwapIcon} alt={"swap icon"}/>
                {/*<input*/}
                {/*    className={"w-2/3 leading-9 text-base font-medium text-center text-slate-700 placeholder:text-sm outline-none "}*/}
                {/*    type={"text"}*/}
                {/*    placeholder={"1234 1234 1234 1234"}*/}
                {/*    onKeyDown={(event) => {*/}
                {/*        if (event.key == "Backspace") {*/}

                {/*        } else if (event.currentTarget.value.length > 16 + 2) {*/}
                {/*            event.preventDefault()*/}
                {/*        } else if (!/[0-9]/.test(event.key)) {*/}
                {/*            event.preventDefault()*/}
                {/*        }*/}
                {/*    }}*/}
                {/*    onChange={(event) => {*/}
                {/*        handleFormatCardNumber(event)*/}
                {/*    }}/>*/}

            </div>
        </div>
    )
}

MoneySource.propTypes = {
    iconUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

export default MoneySource;