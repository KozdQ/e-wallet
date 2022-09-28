import React from "react";
import BackIcon from "../resources/images/back.png"
import AmountInput from "../components/AmountInput";
import MoneySource from "../components/MoneySource";

import Vietcombank from "../resources/images/banks/Vietcombank.svg"
import ACB from "../resources/images/banks/ACB.svg"
import BIDV from "../resources/images/banks/BIDV.webp"
import MBBank from "../resources/images/banks/MBBank.svg"
import MSB from "../resources/images/banks/MSB.svg"
import OCB from "../resources/images/banks/OCB.svg"
import VPBank from "../resources/images/banks/VPBank.svg"
import EmptyMoneySource from "../components/EmptyMoneySource";
import NumPad from "../components/NumPad";

function Topup() {
    return (
        <div className={"bg-be h-screen"}>
            <div className={"flex flex-row bg-be h-20"}>
                <img className={"w-3.5 h-3.5 mt-auto mb-5 ml-8 mr-5"} src={BackIcon} alt={"backward"}/>
                <div className={"font-bold text-xl mt-auto mb-3.5"}>{"Top up"}</div>
            </div>
            <div className={"flex flex-col ml-6 mr-6 p-4 bg-white h-full rounded-md"}>
                <div className={"flex flex-row justify-between"}>
                    <div className={"text-sm italic text-slate-800 leading-6"}>Total available balance</div>
                    <div className={"text-xs italic font-bold leading-6"}>{"1.234.456" + "\u20AB"}</div>
                </div>
                <AmountInput/>
                {/*<MoneySource iconUrl={ACB} name={"OCB"}/>*/}
                <EmptyMoneySource/>
                <NumPad/>
            </div>
        </div>
    )
}

export default Topup;