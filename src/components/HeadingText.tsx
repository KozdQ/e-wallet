import React from "react";
import PropTypes from "prop-types";

function HeadingText(props: any) {
    return (
        <div className={"font-bold"}>
            {props.text}
        </div>
    )
}

HeadingText.propTypes = {
    text: PropTypes.string.isRequired
};

export default HeadingText;
