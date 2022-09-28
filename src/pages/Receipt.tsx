import React from "react";
import BackIcon from "../resources/images/back.png"
import StatusTrans from "../components/StatusTrans";

import SuccessIcon from "../resources/images/success.png"
import ProcessingIcon from "../resources/images/processing.png"
import CancelIcon from "../resources/images/cancel.png"
import Bottom from "../components/Bottom";



function Receipt() {
    return (
        <div className={"bg-be h-screen pb-36 font-mono"}>
            <div className={"flex flex-row bg-be h-20"}>
                <img className={"w-3.5 h-3.5 mt-auto mb-5 ml-8 mr-5"} src={BackIcon} alt={"backward"}/>
                <div className={"font-bold text-xl mt-auto mb-3.5"}>{"Receipt"}</div>
            </div>
            <div className={"flex flex-col ml-6 mr-6 bg-white h-full rounded-md"}>
                <StatusTrans iconUrl={SuccessIcon} status={"TOPUP SUCCESS"} desc={"Top up the wallet from OCB"} />
                <div className={"relative h-12 w-full"}>
                    <div className={"absolute w-5 h-5 top-1 -left-3 rounded-r-full bg-be"}></div>
                    <div className={"absolute w-5 h-5 top-1 -right-3 rounded-l-full bg-be"}></div>
                </div>
                <div className={"text-center p-3 w-80 ml-auto mr-auto border-dashed border-t-2 border-be"}>
                    <div className={"font-sans font-light text-base"}>Total Amount</div>
                    <div className={"font-bold text-xl p-1 w-10/12 mr-auto ml-auto overflow-x-scroll"}>{"1.234.567" + " VND"}</div>
                </div>
                <Bottom
                    extraStyle={"m-3 bg-black text-white text-center font-bold"}
                    name={"Done"}/>
            </div>
        </div>
    )
}

export default Receipt;