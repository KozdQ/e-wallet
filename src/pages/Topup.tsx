import React from "react";
import BackIcon from "../resources/images/back.png"

function Topup() {
    return (
        <div className={"bg-be h-screen"}>
            <div className={"flex flex-row bg-be h-20"}>
                <img className={"w-4 h-4 mt-auto mb-5 ml-5 mr-5"} src={BackIcon} alt={"backward"}/>
                <div className={"font-bold text-xl mt-auto mb-3.5"}>{"Top up"}</div>
            </div>
            <div className={"ml-6 mr-6 p-2 bg-white h-full rounded-md"}>
                Hi
            </div>
        </div>
    )
}

export default Topup;