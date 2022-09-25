import React from "react";
import PropTypes from "prop-types";

function Image(props: any) {
    return (
        <img src={props.src} alt={props.alt}></img>
    )
}

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string
}

export default Image;