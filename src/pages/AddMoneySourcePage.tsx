import React, {useEffect, useState} from "react";
import BackIcon from "../resources/images/back.png";
import Vietcombank from "../resources/images/banks/Vietcombank.svg"
import ACB from "../resources/images/banks/ACB.svg"
import BIDV from "../resources/images/banks/BIDV.webp"
import MBBank from "../resources/images/banks/MBBank.svg"
import MSB from "../resources/images/banks/MSB.svg"
import OCB from "../resources/images/banks/OCB.svg"
import VPBank from "../resources/images/banks/VPBank.svg"
import NumPad from "../components/NumPad";
import AddMoneySource from "../components/AddMoneySource";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function AddMoneySourcePage() {
    const navigate = useNavigate();

    const phone = localStorage.getItem("phone")
    const accessToken = localStorage.getItem("accessToken")
    const [iconBank, setIconBank] = useState(ACB)
    const [bankCode, setBankCode] = useState("ACB")
    const [cardNumber, setCardNumber] = useState("")

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

    return (
        <div className={"bg-be h-screen"}>
            <div className={"flex flex-row bg-be h-20"}>
                <img className={"w-3.5 h-3.5 mt-auto mb-5 ml-8 mr-5"} src={BackIcon} alt={"backward"} onClick={() => {
                    navigate("/topup")
                }}/>
                <div className={"font-bold text-xl mt-auto mb-3.5"}>{"Add Money Sources"}</div>
            </div>
            <div className={"flex flex-col ml-6 mr-6 p-4 bg-white h-full rounded-md"}>
                <div className={"w-full mt-2"}>
                    <div className={"text-xs font-semibold ml-2"}>Select type</div>
                    <select
                        className={"w-full mt-1 p-2 border text-center font-bold text-xl font-san text-slate-600 rounded-md placeholder:italic placeholder:font-light"}
                        data-testid={"select-field"}
                        onChange={(event) => {
                            const sel = event.currentTarget
                            setIconBank(sel.value)
                            setBankCode(sel.options[sel.selectedIndex].text)
                        }}
                    >
                        <option value={ACB}>ACB</option>
                        <option value={OCB}>OCB</option>
                        <option value={BIDV}>BIDV</option>
                        <option value={MBBank}>MBBank</option>
                        <option value={MSB}>MSB</option>
                        <option value={VPBank}>VPBank</option>
                        <option value={Vietcombank}>Vietcombank</option>
                    </select>
                </div>
                <AddMoneySource iconUrl={iconBank} name={bankCode} setCardNumber={(cardNumber: string) => {
                    setCardNumber(cardNumber)
                }}/>
                <NumPad onClick={() => {
                    console.log(phone, " ", bankCode, " ", cardNumber.slice(0, 6), " ", cardNumber.slice(12))
                    if (cardNumber.length < 16) {
                        console.log("card number is not valid");
                    } else {

                        axios.post('http://localhost:8082/e-wallet/add-source-of-fund', {
                            phone: phone,
                            bankCode: bankCode,
                            f6no: cardNumber.slice(0, 6),
                            l4no: cardNumber.slice(12)
                        }, {
                            headers: {
                                'Access-Control-Allow-Origin': '*',
                                'Content-Type': 'application/x-www-form-urlencoded',
                            }
                        })
                            .then(function (response) {
                                if (response.data === "ADD_SOURCE_SUCCESS") {
                                    navigate("/topup")
                                }
                                console.log(response)
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


export default AddMoneySourcePage;