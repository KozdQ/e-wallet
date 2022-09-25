import React from "react";
import PropTypes from "prop-types";

function NormalText(props: any) {
    return (
        <div className={props.extraStyle}>
            {props.text}
        </div>
    )
}

NormalText.propTypes = {
    extraStyle: PropTypes.string,
    text: PropTypes.string.isRequired
}

export default NormalText;