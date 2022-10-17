import React, {useEffect, useState} from "react";
import BackIcon from "../resources/images/back.png"
import StatusTrans from "../components/StatusTrans";

import SuccessIcon from "../resources/images/success.png"
import ProcessingIcon from "../resources/images/processing.png"
import CancelIcon from "../resources/images/cancel.png"
import Bottom from "../components/Bottom";
import axios, {AxiosResponse} from "axios";
import {useNavigate} from "react-router-dom";


function Receipt() {
    const navigate = useNavigate();

    const appTransId = localStorage.getItem("appTransId")
    const bankCode = localStorage.getItem("bankCode")

    const [iconStatus, setIconStatus] = useState(ProcessingIcon)
    const [tranStatus, setTranStatus] = useState("INIT")
    const [amount, setAmount] = useState("0")

    function formatCurrency(amount: string) {
        for (let i = amount.length - 3; i > 0; i -= 3) {
            amount = amount.slice(0, i) + "." + amount.slice(i);
        }
        return amount;
    }

    function updateState(response: AxiosResponse) {
        setTranStatus(response.data.tranStatus)
        setAmount(response.data.amount)
        switch (response.data.tranStatus) {
            case "INIT":
            case "PROCESSING":
            case "RECORD_BOOKKEEPING":
                setIconStatus(ProcessingIcon)
                break

            case "SUCCESSFUL":
                setIconStatus(SuccessIcon)
                break

            case "FAILED":
                setIconStatus(CancelIcon)
                break

            default:
                setIconStatus(CancelIcon)
                break
        }
    }


    useEffect(() => {
        const handle = setInterval((iconStatus) => {
            axios.post('http://localhost:8080/pe/get-trans-status', {
                appTransId: appTransId,
            }, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            })
                .then(function (response) {
                    updateState(response)
                })
                .catch(function (error) {
                    console.log(error);
                });
        }, 200);
        return () => {
            clearInterval(handle);
        };
    }, [])

    return (
        <div className={"bg-be h-screen pb-36 font-mono"}>
            <div className={"flex flex-row bg-be h-20"}>
                <img className={"w-3.5 h-3.5 mt-auto mb-5 ml-8 mr-5"} src={BackIcon} alt={"backward"} onClick={() => {
                    navigate("/homepage")
                }}/>
                <div className={"font-bold text-xl mt-auto mb-3.5"}>{"Result"}</div>
            </div>
            <div className={"flex flex-col ml-6 mr-6 bg-white h-full rounded-md"}>
                <StatusTrans iconUrl={iconStatus} status={tranStatus} desc={"Top up the wallet from " + bankCode}/>
                <div className={"relative h-12 w-full"}>
                    <div className={"absolute w-5 h-5 top-1 -left-3 rounded-r-full bg-be"}></div>
                    <div className={"absolute w-5 h-5 top-1 -right-3 rounded-l-full bg-be"}></div>
                </div>
                <div className={"text-center p-3 w-80 ml-auto mr-auto border-dashed border-t-2 border-be"}>
                    <div className={"font-sans font-light text-base"}>Total Amount</div>
                    <div
                        className={"font-bold text-xl p-1 w-10/12 mr-auto ml-auto overflow-x-scroll"}>{formatCurrency(amount) + " VND"}</div>
                </div>
                <Bottom
                    extraStyle={"m-3 bg-black text-white text-center font-bold"}
                    name={"Done"}
                    onClick={() => {
                        navigate("/homepage")
                    }}/>
            </div>
        </div>
    )
}

export default Receipt;