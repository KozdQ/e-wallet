import React from "react";
import AddCard from "../resources/images/credit-card.png";

function EmptyMoneySource(props: any) {
    return (
        <div className={"mt-3"}>
            <div className={"text-xs font-semibold ml-2"}>Money Source</div>
            <div className={"flex flex-row justify-between w-full h-14 border rounded-md mt-0.5 p-2"}>
                <div className={"flex flex-row w-5/6"}>
                    <img className={"h-2/3 mt-auto mb-auto ml-3 mr-3"} src={""} alt={""}/>
                    <div
                        className={"w-full leading-10 text-xl italic font-light text-center text-slate-400 placeholder:text-sm outline-none "}>
                        {"no source of money"}
                    </div>
                </div>
                <img className={"h-2/3 mt-auto mb-auto"} src={AddCard} alt={"add card"}/>
            </div>
        </div>
    )
}

EmptyMoneySource.propTypes = {}

export default EmptyMoneySource;