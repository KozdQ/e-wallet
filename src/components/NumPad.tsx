import React from "react";
import NumKey from "./NumKey";
import Bottom from "./Bottom";

function NumPad(props: any) {
    return (
        <div className={"flex flex-col h-full w-full bg-white border-t mt-8 p-3 pt-2"}>
            <div className={"mt-3 flex flex-row h-16 w-full bg-white rounded-t-md"}>
                <NumKey name={"1"} extraStyle={"border-b"}/>
                <NumKey name={"2"} extraStyle={"border-l border-r border-b"}/>
                <NumKey name={"3"} extraStyle={"border-b"}/>
            </div>
            <div className={"flex flex-row h-16 w-full bg-white"}>
                <NumKey name={"4"} extraStyle={"border-b"}/>
                <NumKey name={"5"} extraStyle={"border-l border-r border-b"}/>
                <NumKey name={"6"} extraStyle={"border-b"}/>
            </div>
            <div className={"flex flex-row h-16 w-full bg-white"}>
                <NumKey name={"7"} extraStyle={"border-b"}/>
                <NumKey name={"8"} extraStyle={"border-l border-r border-b"}/>
                <NumKey name={"9"} extraStyle={"border-b"}/>
            </div>
            <div className={"flex flex-row h-16 w-full bg-white rounded-b-md"}>
                <NumKey name={"."}/>
                <NumKey name={"0"} extraStyle={"border-l border-r"}/>
                <NumKey name={"\u232B"}/>
            </div>
            <Bottom
                extraStyle={"mt-5 bg-black text-white text-center font-bold"}
                name={"Enter"}/>
        </div>
    )
}

export default NumPad;