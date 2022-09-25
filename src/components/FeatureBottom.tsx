import React from "react";
import PropTypes from "prop-types";
import NormalText from "./NormalText";

function FeatureBottom(props: any) {
    return (
        <div className={props.extraStyle}>
            <img className={"invert w-7 h-7 m-1"} src={props.iconUrl} alt={props.name + " icon"}/>
            <NormalText
                extraStyle={"text-white"}
                text={props.name}/>
        </div>
    )
}

FeatureBottom.propTypes = {
    extraStyle: PropTypes.string,
    name: PropTypes.string.isRequired,
    iconUrl: PropTypes.string.isRequired
}

export default FeatureBottom;