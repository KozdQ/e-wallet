import React from "react";
import PropTypes from "prop-types";
import NormalText from "./NormalText";

function HistoryTransaction(props: any) {
    return (
        <div className={"bg-white w-full mb-1.5 p-2 border-b-2 border-r"}>
            <div className={"flex flex-row justify-between"}>
                <div className={"flex flex-row"}>
                    <img className={"w-5 h-5 mt-auto mb-auto ml-3 mr-3"} src={props.iconUrl}
                         alt={props.name + " icon"}/>
                    <div className={"flex flex-col"}>
                        <div className={"text-xs font-semibold pb-0.5 pt-1"}>{props.name}</div>
                        <div className={"text-xs font-light italic text-slate-600"}>{props.date}</div>
                    </div>
                </div>
                <div>
                    <NormalText
                        extraStyle={"font-semibold text-sm leading-10 mr-1 w-24 overflow-x-scroll rtl"}
                        text={"1.234.456" + "\u20AB"}/>
                </div>

            </div>
        </div>
    )
}

HistoryTransaction.propsType = {
    iconUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
}

export default HistoryTransaction;