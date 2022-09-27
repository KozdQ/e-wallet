import React from "react";
import HeadingText from "../components/HeadingText";
import NormalText from "../components/NormalText";
import FeatureBottom from "../components/FeatureBottom";
import PlusIcon from "../resources/images/plus.png";
import SendIcon from "../resources/images/send.png";
import WithdrawIcon from "../resources/images/withdraw.png";
import HistoryTransaction from "../components/HistoryTransaction";

function Homepage() {
    return (
        <div>
            <HeadingText
                extraStyle={"pl-8 pt-8 pb-5 text-2xl bg-be"}
                text={"ZPay"}/>
            <div className={"ml-6 mr-6 mt-5 mb-5"}>

                <div className={"flex flex-row justify-between"}>
                    <div>
                        <NormalText
                            extraStyle={"text-lg font-medium"}
                            text={"Hi, " + "Hoài Bão"}/>
                        <NormalText
                            extraStyle={"text-xs italic text-slate-600"}
                            text={"Total available balance"}/>
                    </div>
                    <NormalText
                        extraStyle={"font-bold leading-10"}
                        text={"1.234.456" + "\u20AB"}/>
                </div>
                <div className={"mt-3 mb-3 bg-white rounded-md border"}>
                    <div
                        className={" justify-around p-2 flex flex-row bg-black rounded-md border border-white"}>
                        <FeatureBottom
                            name={"Topup"}
                            iconUrl={PlusIcon}/>
                        <FeatureBottom
                            name={"Send"}
                            iconUrl={SendIcon}/>
                        <FeatureBottom
                            name={"Withdraw"}
                            iconUrl={WithdrawIcon}/>
                    </div>
                </div>
                <div className={"flex flex-col"}>
                    <div className={"flex flex-row justify-between"}>
                        <NormalText
                            extraStyle={"text-sm font-bold mb-3"}
                            text={"Recent Transactions"}/>
                        <NormalText
                            extraStyle={"text-xs text-slate-800 leading-5"}
                            text={"See All"}/>
                    </div>
                    <div className={"h-96 overflow-auto"}>
                        {[...Array(6)].map((e, i) => <HistoryTransaction
                            iconUrl={PlusIcon}
                            name={"Top up the wallet from OCB"}
                            date={"26/09/2022"}/>)}
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Homepage;