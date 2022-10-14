import React, {useState} from "react";
import BackIcon from "../resources/images/back.png";
import Bottom from "../components/Bottom";
import NormalInput from "../components/NormalInput";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function Login() {
    localStorage.setItem("phone", "")
    localStorage.setItem("accessToken", "")

    const navigate = useNavigate();

    const [phone, setPhone] = useState();
    const [password, setPassword] = useState()
    return (
        <div className={"bg-be h-screen"}>
            <div className={"flex flex-row bg-be h-20"}>
                <img className={"w-3.5 h-3.5 mt-auto mb-5 ml-8 mr-5 hover:cursor-pointer"} src={BackIcon}
                     alt={"backward"} onClick={() => navigate("/on-boarding")}/>
                <div className={"font-bold text-xl mt-auto mb-3.5"}>{"Login"}</div>
            </div>
            <div className={"flex flex-col ml-6 mr-6 p-4 bg-white rounded-md"}>
                <NormalInput typeInput={"text"} inputPlaceholder={"phone"}
                             onBlur={(e) => setPhone(e.currentTarget.value)}/>
                <NormalInput typeInput={"password"} inputPlaceholder={"password"}
                             onBlur={(e) => setPassword(e.currentTarget.value)}/>
                <Bottom
                    extraStyle={"mt-5 bg-black text-white text-center font-bold"}
                    name={"Enter"}
                    onClick={() => {
                        console.log(phone, " ", password)
                        // @ts-ignore
                        localStorage.setItem("phone", phone)

                        axios.post('http://localhost:8081/um/login', {
                            phone: phone,
                            password: password
                        }, {
                            headers: {
                                'Access-Control-Allow-Origin': '*',
                                'Content-Type': 'application/x-www-form-urlencoded',
                            }
                        })
                            .then(function (response) {
                                if (response.data.message === "LOGIN SUCCESS") {
                                    localStorage.setItem("accessToken", response.data.accessToken);
                                    navigate("/homepage")
                                } else {
                                    localStorage.setItem("accessToken", "");
                                    navigate("/login")
                                }
                                console.log(response)
                            })
                            .catch(function (error) {
                                navigate("/login")
                                console.log(error);
                            });
                    }}/>
            </div>
        </div>
    )
}

export default Login;