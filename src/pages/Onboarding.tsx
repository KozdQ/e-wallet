import React from "react";
import HeadingText from "../components/HeadingText";
import NormalText from "../components/NormalText";
import Image from "../components/Image";
import mainPoster from "../resources/images/mainPoster.jpeg"

function Onboarding() {
    return (
        <div>
            <Image src={mainPoster} alt={"Poster onBoarding page"} />
            <HeadingText text={"Online Payment"}/>
            <NormalText text={"Ứng dụng thanh toán di động thoã mãn mọi nhu cầu thanh toán trong cuộc sống và nhu cầu kinh doanh"}/>
        </div>
    )
}

export default Onboarding;