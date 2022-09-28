import React from "react";
import PropTypes from "prop-types";

function StatusTrans(props: any) {
    return (
        <div className={"w-full p-8 flex flex-col"}>
            <img className={"w-48 h-48 ml-auto mr-auto mb-5"} src={props.iconUrl} alt={props.status}/>
            <div className={"text-center font-bold font-mono text-xl p-2"}>{props.status}</div>
            <div className={"text-center italic text-sm text-slate-600"}>{props.desc}</div>
        </div>
    )
}

StatusTrans.propTypes = {
    iconUrl: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired
}

export default StatusTrans;