import React, {ChangeEvent, useEffect, useState} from "react";
import HeadingText from "../components/HeadingText";
import NormalText from "../components/NormalText";
import FeatureBottom from "../components/FeatureBottom";
import PlusIcon from "../resources/images/plus.png";
import SendIcon from "../resources/images/send.png";
import WithdrawIcon from "../resources/images/withdraw.png";
import HistoryTransaction from "../components/HistoryTransaction";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {string} from "prop-types";

function Homepage() {
    const navigate = useNavigate();
    const phone = localStorage.getItem("phone");
    const [amount, setAmount] = useState("0")
    const [listTrans, setListTrans] = useState([])

    function formatCurrency(amount: string) {
        for (let i = amount.length - 3; i > 0; i -= 3) {
            amount = amount.slice(0, i) + "." + amount.slice(i);
        }
        return amount;
    }

    useEffect(() => {
        axios.post('http://localhost:8082/e-wallet/get-balance', {
            phone: phone,
        }, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        })
            .then(function (response) {
                setAmount(formatCurrency(response.data.balance))
                console.log(response)
            })
            .catch(function (error) {
                console.log(error);
            });
    })
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
                            text={"Hi, " + phone}/>
                        <NormalText
                            extraStyle={"text-xs italic text-slate-600"}
                            text={"Total available balance"}/>
                    </div>
                    <NormalText
                        extraStyle={"font-bold leading-10"}
                        text={amount + "\u20AB"}/>
                </div>
                <div className={"mt-3 mb-3 bg-white rounded-md border"}>
                    <div
                        className={" justify-around p-2 flex flex-row bg-black rounded-md border border-white"}>
                        <FeatureBottom
                            name={"Topup"}
                            iconUrl={PlusIcon}
                            onClick={() => navigate("/topup")}/>
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
                        {listTrans.length != 0 && [...Array(6)].map((e, i) => <HistoryTransaction
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