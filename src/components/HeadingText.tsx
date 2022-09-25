import React from "react";
import PropTypes from "prop-types";

function HeadingText(props: any) {
    return (
        <div className={"font-extrabold " + props.extraStyle}>
            {props.text}
        </div>
    )
}

HeadingText.propTypes = {
    extraStyle: PropTypes.string,
    text: PropTypes.string.isRequired
};

export default HeadingText;
