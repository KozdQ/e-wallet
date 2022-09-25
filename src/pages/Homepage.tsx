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
        <div className={"m-8"}>
            <HeadingText
                extraStyle={"pt-5 pb-5 text-xl"}
                text={"ZPay"}/>
            <div className={"flex flex-row"}>
                <div>
                    <NormalText
                        extraStyle={""}
                        text={"Hi, " + "Hoài Bão"}/>
                    <NormalText
                        extraStyle={""}
                        text={"Total available balance"}/>
                </div>
                <NormalText
                    extraStyle={"font-bold"}
                    text={"1.234.456"}/>
            </div>
            <div className={"flex flex-row bg-black rounded-2xl border"}>
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
            <div className={"flex flex-col"}>
                <div className={"flex flex-row"}>
                    <HeadingText
                        text={"Recent Transactions"}/>
                    <NormalText
                        text={"See All"}/>
                </div>
                <div>
                    <HistoryTransaction/>
                </div>
            </div>


        </div>
    )
}

export default Homepage;