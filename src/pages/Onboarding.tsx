import React from "react";
import HeadingText from "../components/HeadingText";
import NormalText from "../components/NormalText";
import Image from "../components/Image";
import mainPoster from "../resources/images/mainPoster.png"
import Bottom from "../components/Bottom";
import {useNavigate} from "react-router-dom";

function Onboarding() {
    const navigate = useNavigate();
    return (
        <div>
            <Image src={mainPoster} alt={"Poster onBoarding page"}/>
            <div className={"w-full"}>
                <HeadingText
                    extraStyle={"text-center text-2xl mt-5"}
                    text={"Online Payment"}/>
                <NormalText
                    extraStyle={"text-center text-xs mb-5 pr-5 pl-5"}
                    text={"Ứng dụng thanh toán di động thoã mãn mọi nhu cầu thanh toán trong cuộc sống và nhu cầu kinh doanh"}/>
            </div>
            <div>
                <Bottom
                    extraStyle={"ml-8 mr-8 bg-black text-white text-center font-bold hover:cursor-pointer"}
                    name={"Login"}
                    onClick={() => navigate("/login")}/>
                <Bottom
                    extraStyle={"ml-8 mr-8 bg-white text-black text-center font-bold border-2 border-black"}
                    name={"Sign up"}
                    onClick={() => navigate("/signup")}/>
            </div>

        </div>
    )
}

export default Onboarding;