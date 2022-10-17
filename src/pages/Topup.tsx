import React, {useEffect, useState} from "react";
import BackIcon from "../resources/images/back.png"
import AmountInput from "../components/AmountInput";
import Vietcombank from "../resources/images/banks/Vietcombank.svg"
import ACB from "../resources/images/banks/ACB.svg"
import BIDV from "../resources/images/banks/BIDV.webp"
import MBBank from "../resources/images/banks/MBBank.svg"
import MSB from "../resources/images/banks/MSB.svg"
import OCB from "../resources/images/banks/OCB.svg"
import VPBank from "../resources/images/banks/VPBank.svg"
import EmptyMoneySource from "../components/EmptyMoneySource";
import NumPad from "../components/NumPad";
import axios from "axios";
import MoneySource from "../components/MoneySource";
import {useNavigate} from "react-router-dom";

function Topup() {
    const navigate = useNavigate();

    function formatCurrency(amount: string) {
        for (let i = amount.length - 3; i > 0; i -= 3) {
            amount = amount.slice(0, i) + "." + amount.slice(i);
        }
        return amount;
    }

    const phone = localStorage.getItem("phone")
    const accessToken = localStorage.getItem("accessToken")
    const [balance, setBalance] = useState("0")
    const [amount, setAmount] = useState("0")
    const [indexSource, setIndexSource] = useState(0)
    const [listSourceOfFund, setListSourceOfFund] = useState([{
        "phone": "0969189947",
        "bankCode": "OCB",
        "f6no": "123456",
        "l4no": "1234"
    }])
    const [iconBank, setIconBank] = useState(OCB)

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
                setBalance(formatCurrency(response.data.balance))
                console.log(response)
            })
            .catch(function (error) {
                console.log(error);
            });

        axios.post('http://localhost:8082/e-wallet/get-source-of-fund', {
            phone: phone,
        }, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        })
            .then(function (response) {
                setListSourceOfFund(response.data.list)
                console.log(response)
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [phone])

    useEffect(() => {
        if (listSourceOfFund.length > 0) {
            switch (listSourceOfFund[indexSource].bankCode) {
                case "OCB":
                    setIconBank(OCB)
                    break
                case "ACB":
                    setIconBank(ACB)
                    break
                case "BIDV":
                    setIconBank(BIDV);
                    break
                case "MBBank":
                    setIconBank(MBBank)
                    break
                case "MSB":
                    setIconBank(MSB)
                    break
                case "VPBank":
                    setIconBank(VPBank)
                    break
                case "Vietcombank":
                    setIconBank(Vietcombank)
                    break
                default:
            }
        }
    }, [indexSource, listSourceOfFund])

    function swapIndexSource() {
        var newIndexSource = indexSource + 1;
        if (newIndexSource < listSourceOfFund.length) {
            setIndexSource(newIndexSource);
        } else {
            setIndexSource(0);
            navigate("/money-source");
        }
    }

    return (
        <div className={"bg-be h-screen"}>
            <div className={"flex flex-row bg-be h-20"}>
                <img className={"w-3.5 h-3.5 mt-auto mb-5 ml-8 mr-5"} src={BackIcon} alt={"backward"} onClick={() => {
                    navigate("/homepage")
                }}/>
                <div className={"font-bold text-xl mt-auto mb-3.5"}>{"Top up"}</div>
            </div>
            <div className={"flex flex-col ml-6 mr-6 p-4 bg-white h-full rounded-md"}>
                <div className={"flex flex-row justify-between"}>
                    <div className={"text-sm italic text-slate-800 leading-6"}>Total available balance</div>
                    <div className={"text-xs italic font-bold leading-6"}>{balance + "\u20AB"}</div>
                </div>
                <AmountInput setAmount={(amount: string) => {
                    setAmount(amount)
                }}/>
                {listSourceOfFund.length !== 0 ?
                    <MoneySource iconUrl={iconBank} name={listSourceOfFund[indexSource].bankCode}
                                 swapIndexSource={() => swapIndexSource()} l4no={listSourceOfFund[indexSource].l4no}/>
                    : <EmptyMoneySource/>}
                <NumPad onClick={() => {
                    console.log(phone, " ", listSourceOfFund[indexSource], " ", amount)
                    if (amount === "") console.log("amount is null")
                    else {
                        axios.get('http://localhost:8080/pe/create-order', {
                            headers: {
                                'Access-Control-Allow-Origin': '*',
                                'Content-Type': 'application/x-www-form-urlencoded',
                            }
                        })
                            .then(function (response) {
                                localStorage.setItem("appTransId", response.data.appTransId);
                                console.log(response)
                                var chargeInfo = {
                                    "bankCode": listSourceOfFund[indexSource].bankCode,
                                    "f6no": listSourceOfFund[indexSource].f6no,
                                    "l4no": listSourceOfFund[indexSource].l4no
                                }
                                localStorage.setItem("bankCode", chargeInfo.bankCode);
                                axios.post('http://localhost:8080/pe/submit-trans', {
                                    accessToken: accessToken,
                                    phone: phone,
                                    appId: 454,
                                    appTransId: response.data.appTransId,
                                    reqDate: Date.now(),
                                    amount: amount,
                                    chargeInfo: JSON.stringify(chargeInfo)
                                }, {
                                    headers: {
                                        'Access-Control-Allow-Origin': '*',
                                        'Content-Type': 'application/x-www-form-urlencoded',
                                    }
                                })
                                    .then(function (response) {
                                        navigate("/receipt")
                                        console.log(response)
                                    })
                                    .catch(function (error) {
                                        console.log(error);
                                    });
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                    }
                }}/>
            </div>
        </div>
    )
}

export default Topup;