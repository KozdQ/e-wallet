import React, {useEffect, useState} from "react";
import HeadingText from "../components/HeadingText";
import NormalText from "../components/NormalText";
import FeatureBottom from "../components/FeatureBottom";
import PlusIcon from "../resources/images/plus.png";
import SendIcon from "../resources/images/send.png";
import WithdrawIcon from "../resources/images/withdraw.png";
import HistoryTransaction from "../components/HistoryTransaction";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function Homepage() {
    const navigate = useNavigate();
    const phone = localStorage.getItem("phone");
    const accessToken = localStorage.getItem("accessToken")
    const [amount, setAmount] = useState("0")
    const [listTrans, setListTrans] = useState([{
        "appTransId": "2022101400000002",
        "phone": "0969189947",
        "reqDate": "1",
        "status": "",
        "extraInfo": "PaymentInfo(accessToken=MDk2OTE4OTk0Ny4xNjY1NzE5MTQxNjUw, phone=0969189947, appId=454, appTransId=2022101400000002, tranStatus=RECORD_BOOKKEEPING, reqDate=1665719146005, amount=10000, chargeInfo=xxx)",
        "amount": "10000"
    }])

    function formatCurrency(amount: string) {
        for (let i = amount.length - 3; i > 0; i -= 3) {
            amount = amount.slice(0, i) + "." + amount.slice(i);
        }
        return amount;
    }

    function date(time: String) {
        return new Date(Number(time)).toLocaleDateString();
    }

    useEffect(() => {
        axios.post('http://localhost:8081/um/verify-access-token', {
            phone: phone,
            accessToken: accessToken,
        }, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        })
            .then(function (response) {
                if (response.data === 0) {
                    navigate("/login")
                }
                console.log(response)
            })
            .catch(function (error) {
                console.log(error);
            });
    })

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

        axios.post('http://localhost:8082/e-wallet/get-list-transaction', {
            phone: phone,
        }, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        })
            .then(function (response) {
                setListTrans(response.data.list)
                console.log(response)
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [phone])
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
                        {listTrans.length !== 0 && listTrans.map((e, i) => <HistoryTransaction
                            key={e.appTransId}
                            iconUrl={PlusIcon}
                            name={"Top up the wallet from OCB"}
                            date={date(e.reqDate)}
                            amount={formatCurrency(e.amount)}/>)}
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Homepage;