import React from "react";
import PropTypes from "prop-types";

function NormalText(props: any) {
    return (
        <div>
            {props.text}
        </div>
    )
}

NormalText.propTypes = {
    text: PropTypes.string.isRequired
}

export default NormalText;