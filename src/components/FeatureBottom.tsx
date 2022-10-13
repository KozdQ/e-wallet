import React from "react";
import PropTypes from "prop-types";
import NormalText from "./NormalText";

function FeatureBottom(props: any) {
    return (
        <div className={"flex flex-col items-center " + props.extraStyle} onClick={props.onClick}>
            <img className={"invert w-7 h-7 "} src={props.iconUrl} alt={props.name + " icon"}/>
            <NormalText
                extraStyle={"text-white text-xs font-semibold"}
                text={props.name}/>
        </div>
    )
}

FeatureBottom.propTypes = {
    extraStyle: PropTypes.string,
    name: PropTypes.string.isRequired,
    iconUrl: PropTypes.string.isRequired,
    onClick: PropTypes.func,
}

export default FeatureBottom;