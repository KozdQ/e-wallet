import React from "react";
import BackIcon from "../resources/images/back.png";
import AmountInput from "../components/AmountInput";
import Vietcombank from "../resources/images/banks/Vietcombank.svg"
import ACB from "../resources/images/banks/ACB.svg"
import BIDV from "../resources/images/banks/BIDV.webp"
import MBBank from "../resources/images/banks/MBBank.svg"
import MSB from "../resources/images/banks/MSB.svg"
import OCB from "../resources/images/banks/OCB.svg"
import VPBank from "../resources/images/banks/VPBank.svg"
import NumPad from "../components/NumPad";
import AddMoneySource from "../components/AddMoneySource";

function AddMoneySourcePage() {
    return (
        <div className={"bg-be h-screen"}>
            <div className={"flex flex-row bg-be h-20"}>
                <img className={"w-3.5 h-3.5 mt-auto mb-5 ml-8 mr-5"} src={BackIcon} alt={"backward"}/>
                <div className={"font-bold text-xl mt-auto mb-3.5"}>{"Add Money Sources"}</div>
            </div>
            <div className={"flex flex-col ml-6 mr-6 p-4 bg-white h-full rounded-md"}>
                <div className={"w-full mt-2"}>
                    <div className={"text-xs font-semibold ml-2"}>Select type</div>
                    <select
                        className={"w-full mt-1 p-2 border text-center font-bold text-xl font-san text-slate-600 rounded-md placeholder:italic placeholder:font-light"}
                    >
                        <option value={ACB}>ACB</option>
                        <option value={OCB}>OCB</option>
                        <option value={BIDV}>BIDV</option>
                        <option value={MBBank}>MBBank</option>
                        <option value={MSB}>MSB</option>
                        <option value={VPBank}>VPBank</option>
                    </select>
                </div>
                <AddMoneySource iconUrl={ACB} name={"OCB"}/>
                <NumPad/>
            </div>
        </div>
    )
}


export default AddMoneySourcePage;